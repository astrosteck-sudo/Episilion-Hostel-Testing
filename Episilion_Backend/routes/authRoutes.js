// routes/authRoutes.js
const express = require("express");
const { googleLogin } = require("../controllers/OAuthController");

const router = express.Router();

router.post("/google", googleLogin);

module.exports = router;
