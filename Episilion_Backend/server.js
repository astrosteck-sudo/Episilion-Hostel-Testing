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

app.post("/hostels", (req, res) => {
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


app.get("/api/hostels", (req, res) => {
  const sql = `
    SELECT 
      hostel_id AS id,
      name,
      type,
      distance,
      hostel_perks AS hostelPerks,
      main_image AS image
    FROM Hostels
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching hostels");
    } else {
      console.log("Fetched:", result); // 👈 see in terminal
      res.json(result); // 👈 send to frontend
    }
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
