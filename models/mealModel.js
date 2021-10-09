const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// meal Schema -------------
const mealSchema = new mongoose.Schema({
  mealType: {
    type: String,
    enum: ["BREAKFAST", "LUNCH", "DINNER"],
  },
  foods: [
    {
      type: ObjectId,
      ref: "Foods",
    },
],
});

// meal model
module.exports = mongoose.model("Meals", mealSchema);
