const express = require("express");

const foodCropController = require("../controllers/foodCropsController");

const router = express.Router();

router.get(
  "/food-crops-from/:country",
  foodCropController.getAllFoodCropsfromGivenCountry
);
router.get("/:id", foodCropController.getOneFoodCrop);
router.get("/", foodCropController.getAllFoodCrops);

module.exports = router;
