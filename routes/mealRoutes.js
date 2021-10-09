const express = require("express");
const router = express.Router();

//------------ Meals related routes only----------------//

const {
  createMeal,
  updateFood,
  deleteFood,
  getMeal,
  getAllMeal
} = require("../controllers/mealController.js");

// Create a Meal
router.post("/api/create", createMeal);

//Update food
router.patch("/api/update/:updateValue", updateFood);

// DELETE a food from foods
router.delete("/api/delete/:id", deleteFood);

// GET all Meal
router.get("/api/getAll", getAllMeal);

// GET a Meal by mealType
router.get("/api/:mealType", getMeal);

module.exports = router;
