require("dotenv").config();

const mysql = require("mysql2");


const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD, // your MySQL password
  database: process.env.DB_NAME ||  "mydb"
});


//THIS CODE RUNS EVERY MIDNIGHT TO DELETE ANY REVIEW THAT IS MORE THAN 2 MONTHS OLD
const cron = require("node-cron")
cron.schedule("0 0 * * *", () => {
  console.log("Running cleanup job...");

  const sql = `
    DELETE FROM Reviews
    WHERE created_at <= NOW() - INTERVAL 2 MONTH
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error deleting old reviews:", err);
    } else {
      console.log("Deleted rows:", result.affectedRows);
    }
  });
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database ✅");
  }
});

module.exports = db;