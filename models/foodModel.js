const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// food Schema -------------
const foodSchema = new mongoose.Schema({
    food: [],
});

// food model
module.exports = mongoose.model("Foods", foodSchema);
