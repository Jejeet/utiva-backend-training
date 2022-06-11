const fs = require("fs");
const path = require("path");

const dataSource = fs.readFileSync(
  path.join(`${__dirname}`, "../dev-data/data.json"),
  "utf-8"
);

exports.getAllFoodCrops = (req, res) => {
  const allFoodCrops = JSON.parse(dataSource);
  res.send(allFoodCrops);
};

exports.getOneFoodCrop = (req, res) => {
  const id = Number(req.params.id);
  const allFoodCrops = JSON.parse(dataSource);

  // Loop through allFoodCrops [{}, {}, {}]
  // Find any object with its id property that matches the id from the req.params
  const foodCropMatched = allFoodCrops.find((foodCrop) => foodCrop.id === id);

  // return as response the found object
  res.send(foodCropMatched);
};

exports.getAllFoodCropsfromGivenCountry = (req, res) => {
  const country = req.params.country;

  const allFoodCrops = JSON.parse(dataSource);

  const matchedFoodCrops = [];

  // a list/array of all the food crops that came from the req.params.country
  allFoodCrops.forEach((foodCrop) => {
    if (foodCrop.from === country) {
      matchedFoodCrops.push(foodCrop);
    }
  });

  res.status(200).json({
    status: "success",
    results: matchedFoodCrops.length,
    matchedFoodCrops,
  });
};
