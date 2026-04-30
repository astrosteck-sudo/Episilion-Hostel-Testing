const express = require("express");
const router = express.Router();

const { searchHostelsAI } = require("../controllers/intentController");

const verifyToken = require("../middleware/verifyToken");
const checkAIUsage = require("../middleware/checkAIUsage");
const checkDeviceUsage = require("../middleware/checkDeviceUsage");

router.post("/search", verifyToken,checkDeviceUsage, checkAIUsage, searchHostelsAI);

module.exports = router;
