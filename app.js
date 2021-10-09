const express = require("express");
const app = express();
app.use(express.json());

//------------------------------------ routes ---------------------//
const mealRoutes = require("./routes/mealRoutes.js");
//-----------------------------------

// Database connection
require("./db/connection");

//----------------- Meal routes-------------//
app.use(mealRoutes);

// 404 api
app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).json({ error: message });
});

// server port
const port = 8080;
app.listen(port, () => {
  console.log(`running on ${port}`);
});
