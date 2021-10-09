const Meal = require("../models/mealModel.js");
const Food = require("../models/foodModel.js");
const AppError = require("../utilities/appError.js");

// create a Meal
exports.createMeal = async (req, res, next) => {
  try {
    const { mealType, food } = req.body;
    const newfood = await new Food({food});
    newfood.save((err) => {
      if (err) {
        return next(new AppError(404, err.message));
      }
    });
    const meal = await Meal.findOne({mealType : mealType});
    if(!meal){
      newMeal = await new Meal({ mealType });
      newMeal.foods.push(newfood);
      newMeal.save((err) => {
        if (err) {
          return next(new AppError(404, err.message));
        }
      });
      res.status(201).json({ message: "success", meal: newMeal });
    }
    else{
      meal.foods.push(newfood);
      meal.save((err) => {
        if (err) {
          return next(new AppError(404, err.message));
        }
      });
      res.status(201).json({ message: "success", meal: meal });
    }
  } catch (err) {
    next(new AppError(404, err.message));
  }
};

//Update food
exports.updateFood = async (req, res, next) => {
  try {
    const query = req.params.updateValue;
    const { newData } = req.body;
    Food.updateMany(
    { food: query},
    { $set: { "food.$": newData} },
  (err) => {
      if(err)
        return next(new AppError(404, err.message));
    }
    );
  const food = await Food.find();
    res.status(200).json({ message: "success", food});
  } catch (err) {
    next(new AppError(404, err.message));
  }
};

//Delete food from foods
exports.deleteFood = async (req, res, next) => {
  try {
    const id = req.params.id;
    const food = await Food.findByIdAndDelete(id);
    Meal.update({_id: id},
      { $pull: {foods: id } });
    res.status(200).json({ message: "success", food });
  } catch (err) {
    next(new AppError(404, err.message));
  }
};

//Get all Meal
exports.getAllMeal = async (req, res, next) => {
  try {
    const meal = await Meal.find().populate("foods");
    res.status(200).json({ message: "success", meal });
  } catch (err) {
    next(new AppError(404, "something went wrong"));
  }
};

//Get Meal by mealType
exports.getMeal = async (req, res, next) =>{
  try {
    const mealType = req.params.mealType;
    const meal = await Meal.findOne({mealType : mealType}).populate("foods");
    if(meal){
      res.status(200).json({ message: "success", meal });
    }
    else{
      res.status(200).json({ message: "No Meal Found" });
    }
  } catch (err) {
    next(new AppError(404, "something went wrong"));
  }
};
