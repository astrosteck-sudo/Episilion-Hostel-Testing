const express = require("express");

const { addFavoriteController } = require("../controllers/favoritesController");

const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/:hostelId", verifyToken, addFavoriteController);

module.exports = router;
