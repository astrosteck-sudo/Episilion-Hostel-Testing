const OpenAI = require("openai");
const db = require("../db");

const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

// DB helper
const queryDB = (sql) =>
  new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

// Check if query is hostel-related
function classifyQuery(query) {
  const hostelKeywords = [
    "hostel", "room", "boys", "girls", "male", "female", "men", "women",
    "price", "cheap", "affordable", "expensive", "budget",
    "wifi", "laundry", "parking", "gym", "kitchen", "amenities",
    "campus", "location", "near", "close", "distance",
    "available", "book", "find", "show", "list", "give", "recommend",
  ];

  const lower = query.toLowerCase();
  return hostelKeywords.some((word) => lower.includes(word));
}

// Format hostel data for AI
function formatHostels(hostels, pricing, locations, amenities) {
  return hostels.map((h) => {
    const price = pricing.find((p) => p.hostel_id === h.hostel_id);
    const loc = locations.find((l) => l.hostel_id === h.hostel_id);
    return {
      id: h.hostel_id,
      name: h.name,
      type: h.type,
      price: price?.price_min || null,
      location: loc?.distance_to_campus_in_minutes || null,
      amenities: amenities
        .filter((a) => a.hostel_id === h.hostel_id)
        .map((a) => a.amenity),
    };
  });
}

// Parse AI response — captures id (string), name, price, reason
function parseAI(text) {
  const cleaned = text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
  const lines = cleaned.split("\n").filter((l) => l.trim());
  const results = [];

  for (const line of lines) {
    // Format: 1. [ID: abc-123] Hostel Name - 500 - reason text here
    const match = line.match(/\[ID:\s*([^\]]+)\]\s*(.+?)\s*-\s*(\d+)\s*-\s*(.+)/);
    if (match) {
      results.push({
        id: match[1].trim(),
        name: match[2].trim(),
        price: parseInt(match[3].trim()),
        reason: match[4].trim(),
      });
    }
  }

  return results;
}

// Extract number limit from query
function extractLimit(query) {
  const match = query.match(/\b(only\s+)?(\d+)\b/i);
  return match ? parseInt(match[2]) : null;
}

exports.searchHostelsAI = async (req, res) => {
  const { query } = req.body;

  // 1. VALIDATE INPUT
  if (!query || typeof query !== "string" || query.trim() === "") {
    return res.status(400).json({ error: "Query is required" });
  }

  // 2. CHECK IF QUERY IS HOSTEL-RELATED
  if (!classifyQuery(query)) {
    return res.status(400).json({
      error: "out_of_scope",
      message:
        "I can only help you find hostels. Try asking something like 'show me cheap boys hostels near campus with wifi'.",
    });
  }

  try {
    // 3. GET DATA FROM DB
    const hostels = await queryDB("SELECT * FROM hostels");
    const pricing = await queryDB("SELECT * FROM pricing");
    const locations = await queryDB("SELECT * FROM locations");
    const amenities = await queryDB("SELECT * FROM amenities");

    const aiData = formatHostels(hostels, pricing, locations, amenities);

    // 4. EXTRACT LIMIT FROM QUERY
    const limit = extractLimit(query);

    // 5. CALL AI
    const completion = await client.chat.completions.create({
      model: "meta/llama-3.1-8b-instruct",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
You are a hostel recommendation engine.

STRICT RULES:
- Use ONLY the hostel data provided
- DO NOT invent hostels
- DO NOT explain anything
- DO NOT introduce yourself
- DO NOT output JSON
- Only return hostels that match the user's request

Return results ONLY in this exact format, one per line:
1. [ID: abc-uuid-string] Hostel Name - price - reason
2. [ID: abc-uuid-string] Hostel Name - price - reason

Where price is the numeric value only (no currency symbol).
Where reason is a short 1 sentence explanation of why this hostel matches the user's request.
          `,
        },
        {
          role: "user",
          content: `
User request:
${query}

Available hostels:
${JSON.stringify(aiData)}

Return best matches only.
          `,
        },
      ],
      max_tokens: 400,
    });

    const raw = completion.choices[0].message.content;
    console.log("RAW AI:", raw);

    // 6. PARSE RESULT
    let result = parseAI(raw);

    // 7. ENFORCE LIMIT IN CODE
    if (limit !== null) {
      result = result.slice(0, limit);
    }

    // 8. FALLBACK IF AI FAILS
    if (!result.length) {
      return res.status(500).json({
        error: "AI returned unusable format",
        raw,
      });
    }

    res.json({ result });
  } catch (err) {
    console.error("searchHostelsAI error:", err);
    res.status(500).json({ error: "AI search failed" });
  }
};