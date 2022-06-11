const express = require("express");

const foodCropsRoutes = require("./routes/foodCropsRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/food-crops/", foodCropsRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Web server is started on port ${port}!`);
});
