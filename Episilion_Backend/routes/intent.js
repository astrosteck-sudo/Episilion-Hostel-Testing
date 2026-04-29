const express = require("express");
const router = express.Router();

const { searchHostelsAI } = require("../controllers/intentController");

const verifyToken = require("../middleware/verifyToken");
const checkAIUsage = require("../middleware/checkAIUsage");

router.post("/search", verifyToken, checkAIUsage, searchHostelsAI);

module.exports = router;
