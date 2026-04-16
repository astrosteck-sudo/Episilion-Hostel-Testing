const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const db = require("./db"); // Import the MySQL connection

const app = express();
const PORT = process.env.PORT || 5000;
//const DATA_FILE = path.join(__dirname, "hostel_data.json");

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());          // Allow requests from any frontend origin
app.use(express.json());  // Parse JSON request bodies

// ── Helper: read the JSON file ────────────────────────────────────────────────
function readData(filePath) {
  DATA_FILE = path.join(__dirname, filePath)
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}


// ── Database Routes ────────────────────────────────────────────────────────────────
//app.use(express.json()); // Middleware to parse JSON bodies

//THIS IS FOR PUTTIN HOSTELS IN THE DATABASE
app.post("/api/hostels", (req, res) => {
  const {
    id,
    name,
    type,
    university,
    yearEstablished,
    distance,
    hostelPerks,
    image
  } = req.body;

  const sql = `
    INSERT INTO Hostels 
    (hostel_id, name, type, university, year_established, distance, hostel_perks, main_image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [id, name, type, university, yearEstablished, distance, hostelPerks, image],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting hostel");
      } else {
        console.log("Inserted:", result);
        res.send("Hostel added successfully ✅");
      }
    }
  );
});

//THIS IS FOR GETTING HOSTELS FROM THE P0DATABASE
// app.get("/api/hostels", (req, res) => {

//   const sql = `
//     SELECT 
//       h.hostel_id AS id,
//       h.name,
//       h.type,
//       h.main_image AS image,
//       h.hostel_perks AS hostelPerks,

//       h.total_reviews AS totalReviews,
//       h.average_rating AS averageRating,

//       l.distance_to_campus_in_meters,
//       l.distance_to_campus_in_minutes,
//       l.latitude,
//       l.longitude,

//       p.price_min,
//       p.price_max,
//       p.billing_period,
//       p.utilities_fee,
//       p.maintenance_fee,
//       p.caution_deposit

//     FROM hostels h
//     LEFT JOIN locations l 
//       ON h.hostel_id = l.hostel_id

//     LEFT JOIN pricing p 
//       ON h.hostel_id = p.hostel_id
//   `;

//   db.query(sql, (err, result) => {

//     if (err) {
//       console.log(err);
//       return res.status(500).send("Error fetching hostels");
//     }

//     const formatted = result.map(item => ({
//       id: item.id,
//       name: item.name,
//       type: item.type,
//       image: item.image,
//       hostelPerks: item.hostelPerks,

//       location: {
//         distanceToCampusMinutes: item.distance_to_campus_in_minutes,
//         distanceToCampusMeters: item.distance_to_campus_in_meters,
//         latitude: item.latitude,
//         longitude: item.longitude
//       },

//       pricing: {
//         priceMin: item.price_min,
//         priceMax: item.price_max,
//         billingPeriod: item.billing_period,

//          additionalFees: {
//           utilities: item.utilities_fee,
//           maintenance: item.maintenance_fee,
//           cautionDeposit: item.caution_deposit
//         }
//       },

//       reviews: {
//         averageRating: item.averageRating,
//         totalReviews: item.totalReviews
//       }
//     }));
//     console.log("Fetched hostels:", formatted);
//     res.json(formatted);
//   });
// });

app.get("/api/hostels", async (req, res) => {

  const query = (sql, values = []) => {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };



  try {
    const hostels = await query("SELECT * FROM hostels");
    const pricing = await query("SELECT * FROM pricing");
    const locations = await query("SELECT * FROM locations");
    const rooms = await query("SELECT * FROM rooms");
    const rules = await query("SELECT * FROM rules");
    const amenities = await query("SELECT * FROM amenities");
    const furnishing = await query("SELECT * FROM furnishing");
    const contacts = await query("SELECT * FROM contact");
    const media = await query("SELECT * FROM media");

    const fullData = hostels.map(h => {
      const loc = locations.find(l => l.hostel_id === h.hostel_id);
      const price = pricing.find(p => p.hostel_id === h.hostel_id);

      return {
        id: h.hostel_id,
        name: h.name,
        type: h.type,
        image: h.main_image,
        hostelPerks: h.hostel_perks,

        location: loc && {
          distanceToCampusMinutes: loc.distance_to_campus_in_minutes,
          distanceToCampusMeters: loc.distance_to_campus_in_meters,
          latitude: loc.latitude,
          longitude: loc.longitude,
          directions: loc.directions
        },

        pricing: price && {
          priceMin: price.price_min,
          priceMax: price.price_max,
          billingPeriod: price.billing_period,
          additionalFees: {
            utilities: price.utilities_fee,
            maintenance: price.maintenance_fee,
            cautionDeposit: price.caution_deposit
          },
          refundPolicy: price.refund_policy
        },

        rooms: {
          //THIS FILTERS THE ROOMS TO ONLY SHOW THE ROOMS THAT BELONG TO THE HOSTEL AND THEN MAPS THEM TO THE CORRECT FORMAT
          types: rooms.filter(r => r.hostel_id === h.hostel_id).map(r => ({
            type: r.room_type,
            price: r.price,
            availableRooms: r.available_rooms
          }))
        },
        amenities: amenities.filter(a => a.hostel_id === h.hostel_id).map(a => a.amenity),
        furnishing: furnishing.filter(f => f.hostel_id === h.hostel_id).map(f => f.furnishing),
        rules: rules.filter(r => r.hostel_id === h.hostel_id).map(r => r.rule),

        contact: (() => {
          const c = contacts.find(x => x.hostel_id === h.hostel_id);

          return c && {
            managerName: c.manager_name,
            phone: c.phone,
            whatsapp: c.whatsapp,
            email: c.email,
            officeHours: c.office_hours,
            website: c.website
          };
        })(),

        reviews: {
          averageRating: h.average_rating,
          totalReviews: h.total_reviews
        },

        media: {
          images: media.filter(m => m.hostel_id === h.hostel_id).map(m => ({
              url: m.url,
              type: m.type
            })),

          //video: videos.find(v => v.hostel_id === h.hostel_id)?.url || null
        }
      };
    });

    res.json(fullData);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});


//THIS IS FOR ADDING REVIEWS TO THE DATABASE
app.post("/api/reviews", (req, res) => {
  const { hostel_id, rating, review_text } = req.body;

  // 1. Validate input
  if (!hostel_id || !rating) {
    return res.status(400).json({ error: "hostel_id and rating are required" });
  }
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5" });
  }

  // 2. SQL queries
  const insertSql = `
    INSERT INTO Reviews (hostel_id, rating, review_text)
    VALUES (?, ?, ?)
  `;
  const updateSql = `
    UPDATE hostels
    SET 
      total_reviews = (SELECT COUNT(*) FROM reviews WHERE hostel_id = ?),
      average_rating = (SELECT IFNULL(AVG(rating), 0) FROM reviews WHERE hostel_id = ?)
    WHERE hostel_id = ?
  `;

  // 3. Execute insert
  db.query(insertSql, [hostel_id, rating, review_text], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error while inserting review" });
    }

    // 4. Update hostel summary AFTER insert
    db.query(updateSql, [hostel_id, hostel_id, hostel_id], (updateErr) => {
      if (updateErr) {
        console.error(updateErr);
        return res.status(500).json({ error: "Database error while updating hostel summary" });
      }

      // 5. Single success response (with latency simulation)
      setTimeout(() => {
        res.json({
          message: "Review added successfully ✅",
          reviewId: result.insertId
        });
      }, 1000);
    });
  });
});


app.get("/api/reviews/:hostelId", (req, res) => {
  let { hostelId } = req.params;
  hostelId = hostelId.replace(":", ""); // Remove the colon if it exists
  const sql = `
    SELECT 
      review_id AS reviewId,
      hostel_id,
      rating,
      review_text AS reviewText,
      created_at AS createdAt
    FROM reviews
    WHERE hostel_id = ?
    ORDER BY created_at DESC
  `;

  db.query(sql, [hostelId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Error fetching reviews"
      });
    }

    res.json(result);
  });
});



// app.get("/", (req, res) => {
//   db.query("SELECT * FROM Hostels", (err, result) => {
//     if (err) {
//       console.log(err);
//       res.send("Error fetching data");
//     } else {
//       console.log(result); // 👈 THIS prints in terminal
//       res.json(result);    // 👈 THIS sends to browser
//     }
//   });
// });



app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});




// ── Routes ────────────────────────────────────────────────────────────────────
// GET /api/data  → return the entire JSON file
app.get("/api/data", (req, res) => {
  try {
    const data = readData("hostel_data.json");
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to read data file." });
  }
});

// GET /api/teamMembers  → return only the teamMembers array
app.get("/api/teamMembers", (req, res) => {
  try {
    const teamMembers = readData("team_Members_data.json");
    res.json({ success: true, teamMembers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to read team Members file." });
  }
});

// GET /api/moreProjects  → return only the moreProjects array
app.get("/api/moreProjects", (req, res) => {
  try {
    const moreProjects = readData("More_From_Us.json");
    res.json({ success: true, moreProjects });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to read more Projects file." });
  }
});



// 404 catch-all
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// ── Start server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server running at http://localhost:${PORT}`);
  console.log(`   GET /api/data`);
  console.log(`   GET /api/teamMembers`);
  console.log(`   GET /api/moreProjects`);
  console.log(`   POST /api/reviews`);
  console.log(`   GET /api/reviews/:hostelId`);
  // console.log(`   GET /api/products`);
  // console.log(`   GET /api/products/:id`);
});



































// // GET /api/users  → return only the users array
// app.get("/api/users", (req, res) => {
//   try {
//     const { users } = readData();
//     res.json({ success: true, count: users.length, data: users });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Failed to read users." });
//   }
// });

// // GET /api/users/:id  → return a single user by id
// app.get("/api/users/:id", (req, res) => {
//   try {
//     const { users } = readData();
//     const user = users.find((u) => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).json({ success: false, message: "User not found." });
//     res.json({ success: true, data: user });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Failed to read users." });
//   }
// });

// // GET /api/products  → return only the products array
// app.get("/api/products", (req, res) => {
//   try {
//     const { products } = readData();
//     res.json({ success: true, count: products.length, data: products });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Failed to read products." });
//   }
// });

// // GET /api/products/:id  → return a single product by id
// app.get("/api/products/:id", (req, res) => {
//   try {
//     const { products } = readData();
//     const product = products.find((p) => p.id === parseInt(req.params.id));
//     if (!product) return res.status(404).json({ success: false, message: "Product not found." });
//     res.json({ success: true, data: product });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Failed to read products." });
//   }
// });




//THIS ADDED THE RANDOM ID'S TO THE HOSTELS

// //import fs from "fs";
// const crypto = require("crypto");

// // Load existing JSON file
// const data = fs.readFileSync("hostel_data.json", "utf-8");
// const hostels = JSON.parse(data);
// //hostel_data.json
// // Assign a UUID string to each hostel
// hostels.forEach(hostel => {
//   if (hostel.id != "") {
//     hostel.id = crypto.randomUUID();
//   }
// });


// Save back to JSON
//fs.writeFileSync("hostel_data.json", JSON.stringify(hostels, null, 2));

//console.log("UUIDs added to hostels!");
