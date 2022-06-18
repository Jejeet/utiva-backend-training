const express = require("express");
require("dotenv").config();

const foodCropsRoutes = require("./routes/foodCropsRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/food-crops/", foodCropsRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `Cannot find ${req.originalUrl} on this server!`,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Web server is started on port ${port}!`);
});
