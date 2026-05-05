const { addFavoriteService } = require("../services/favoritesService");

const addFavoriteController = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { hostelId } = req.params;
    const favorite = await addFavoriteService(userId, hostelId);

    return res.status(201).json({
      success: true,
      message: "Hostel added to favorites",
      data: favorite,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addFavoriteController,
};
