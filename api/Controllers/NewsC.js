const News = require('../modules/News'); 

// Get all news articles
const getAllNews = async () => {
  try {
    const news = await News.find();
    return news;
  } catch (error) {
    throw new Error('Error fetching news articles');
  }
};

// Get a specific news article by ID
const getNewsById = async (id) => {
  try {
    const news = await News.findById(id);
    if (!news) {
      throw new Error('News article not found');
    }
    return news;
  } catch (error) {
    throw new Error('Error fetching news article');
  }
};

// Create a new news article
const createNews = async (data) => {
  try {
    const { imageUrl, title, description, body } = data;
    const newArticle = new News({ imageUrl, title, description, body });
    const savedArticle = await newArticle.save();
    return savedArticle;
  } catch (error) {
    throw new Error('Error creating news article');
  }
};

// Update a news article by ID
const updateNews = async (id, data) => {
  try {
    const { imageUrl, title, description, body } = data;
    const updatedArticle = await News.findByIdAndUpdate(
      id,
      { imageUrl, title, description, body },
      { new: true }
    );
    if (!updatedArticle) {
      throw new Error('News article not found');
    }
    return updatedArticle;
  } catch (error) {
    throw new Error('Error updating news article');
  }
};

// Delete a news article by ID
const deleteNews = async (id) => {
  try {
    const deletedArticle = await News.findByIdAndDelete(id);
    if (!deletedArticle) {
      throw new Error('News article not found');
    }
  } catch (error) {
    throw new Error('Error deleting news article');
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};
