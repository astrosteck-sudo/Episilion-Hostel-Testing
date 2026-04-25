const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const query = (sql, values = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

/**
 * SIGNUP
 */
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.send("Signup successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

/**
 * LOGIN
 */
exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (result.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Wrong password");
    }

    const token = jwt.sign(
      {
        user_id: user.user_id,
        name: user.name,   // use 'name' instead of 'username'
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Generated JWT token for user:", user.name);

    res.json({
      token,
      user: {
        id: user.user_id,
        name: user.name,
        email: user.email
      }
    });
  });
};