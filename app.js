const express = require("express");
const fs = require("fs");

const app = express();

const dataSource = fs.readFileSync("./dev-data/data.json", "utf-8");

app.get("/food-crops", (req, res) => {
  const allFoodCrops = JSON.parse(dataSource);
  res.send(allFoodCrops);
});

app.get("/food-crops/:id", (req, res) => {
  const id = Number(req.params.id);
  const allFoodCrops = JSON.parse(dataSource);

  // Loop through allFoodCrops [{}, {}, {}]
  // Find any object with its id property that matches the id from the req.params
  const foodCropMatched = allFoodCrops.find((foodCrop) => foodCrop.id === id);

  // return as response the found object
  res.send(foodCropMatched);
});

app.get("/", (req, res) => {
  // query
  // console.log(req.query);

  const sentence = `Hello ${req.query.name}`;

  res.send(sentence);
});

app.get("/:name", (req, res) => {
  // params
  console.log(req.params);
  const sentence = `Hello ${req.params.name}`;

  res.send(sentence);
});

app.post("/users", (req, res) => {
  console.log(req.body);

  res.send("Got a POST request");
});

app.patch("/users", (req, res) => {
  res.send("Got a PATCH request");
});

app.delete("/users", (req, res) => {
  res.send("Got a DELETE request");
});

// ASSIGNMENT
// Create a GET request endpoint with the following route/path
// /food-crops-from/:country | requirements: req.params.country
// Return as the response (res.send) a list of all the food crops that came from the req.params.country

const port = 5000;

app.listen(port, () => {
  console.log(`Web server is started on port ${port}!`);
});
