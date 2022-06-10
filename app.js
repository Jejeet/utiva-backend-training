const express = require("express");

const foodCropsRoutes = require("./routes/foodCropsRoutes");

const app = express();

app.use(express.json());

app.use("/", foodCropsRoutes);

// app.get("/food-crops-from/:country", (req, res) => {
//   const country = req.params.country;

//   const allFoodCrops = JSON.parse(dataSource);

//   const matchedFoodCrops = [];

//   // a list/array of all the food crops that came from the req.params.country
//   allFoodCrops.forEach((foodCrop) => {
//     if (foodCrop.from === country) {
//       matchedFoodCrops.push(foodCrop);
//     }
//   });

//   res.status(200).json({
//     status: "success",
//     results: matchedFoodCrops.length,
//     matchedFoodCrops,
//   });
// });

// // ASSIGNMENT
// // Create a GET request endpoint with the following route
// // /food-crops-from/:country | requirements: req.params.country
// // Return as the response (res.send) a list/array of all the food crops that came from the req.params.country

// app.get("/", (req, res) => {
//   // query
//   // console.log(req.query);

//   const sentence = `Hello ${req.query.name}`;

//   res.send(sentence);
// });

// app.get("/:name", (req, res) => {
//   // params
//   console.log(req.params);
//   const sentence = `Hello ${req.params.name}`;

//   res.send(sentence);
// });

// app.post("/users", (req, res) => {
//   console.log(req.body);

//   res.send("Got a POST request");
// });

// app.patch("/users/:id", (req, res) => {
//   console.log(req.body);

//   res.send("Got a PATCH request");
// });

// app.delete("/users/:id", (req, res) => {
//   res.send("Got a DELETE request");
// });

const port = 5000;

app.listen(port, () => {
  console.log(`Web server is started on port ${port}!`);
});
