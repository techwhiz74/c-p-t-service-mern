const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  imageUrl: {
    type: String,  
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
