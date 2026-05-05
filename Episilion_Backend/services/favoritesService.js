const db = require("../db");

const addFavoriteService = async (userId, hostelId) => {
  const pool = db.promise(); // wrap for async/await

  // 1️⃣ Check if hostel exists
  const [hostelCheck] = await pool.query(
    "SELECT hostel_id FROM hostels WHERE hostel_id = ?",
    [hostelId],
  );

  if (hostelCheck.length === 0) {
    throw new Error("Hostel not found");
  }

  // 2️⃣ Add favorite (avoid duplicates)
  const [result] = await pool.query(
    `
    INSERT INTO favorites (user_id, hostel_id)
    VALUES (?, ?)
    ON DUPLICATE KEY UPDATE user_id = user_id
    `,
    [userId, hostelId],
  );

  // MySQL doesn’t support RETURNING * directly
  // If you want the inserted row, query it back:
  const [favorite] = await pool.query(
    "SELECT * FROM favorites WHERE user_id = ? AND hostel_id = ?",
    [userId, hostelId],
  );

  return favorite[0];
};

module.exports = {
  addFavoriteService,
};
