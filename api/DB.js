const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.URI;

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
