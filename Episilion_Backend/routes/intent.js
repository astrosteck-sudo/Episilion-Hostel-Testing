const express = require("express");
const router = express.Router();

const { searchHostelsAI } = require("../controllers/intentController");

// change route name too (more meaningful)
router.post("/search", searchHostelsAI);

module.exports = router;