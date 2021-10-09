const mongoose = require("mongoose");

//MONGO_URI connection
mongoose.connect("mongodb://localhost:27017/meals_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("DB connection established"))
.catch((err) => console.log(err.message));
