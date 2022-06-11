const express = require("express");

const foodCropController = require("../controllers/foodCropsController");
const mutateCountry = require("../middlewares/mutateCountry");

const router = express.Router();

router.get(
  "/food-crops-from/:country",
  mutateCountry,
  foodCropController.getAllFoodCropsfromGivenCountry
);
router.get("/:id", foodCropController.getOneFoodCrop);
router.get("/", foodCropController.getAllFoodCrops);

module.exports = router;
