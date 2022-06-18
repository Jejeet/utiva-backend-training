const mongoose = require("mongoose");

const { Schema } = mongoose;

const foodCropSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Product name is required."],
    trim: true,
  },
  image: String,
  from: String,
  nutrients: String,
  quantity: Number,
  price: String,
  organic: Boolean,
  description: String,
});

const FoodCrop = mongoose.model("FoodCrop", foodCropSchema);

module.exports = FoodCrop;
