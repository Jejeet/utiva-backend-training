const express = require("express");

const foodCropController = require("../controllers/foodCropsController");

const router = express.Router();

router.get("/food-crops", foodCropController.getAllFoodCrops);
router.get("/food-crops/:id", foodCropController.getOneFoodCrop);

module.exports = router;
