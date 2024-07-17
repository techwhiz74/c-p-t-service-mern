const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
