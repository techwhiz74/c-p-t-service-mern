const mongoose = require("mongoose");
require("dotenv").config();
const URI = "mongodb://127.0.0.1:27017/cpt-service";

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  try {
    await mongoose.connect(URI, connectionParams);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};
