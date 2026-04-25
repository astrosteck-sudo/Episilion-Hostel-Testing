const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

const {
  addReview,
  getReviews
} = require("../controllers/reviewController");


// POST review (needs login)
router.post("/", authMiddleware, addReview);

// GET reviews
router.get("/:hostelId", getReviews);

module.exports = router;