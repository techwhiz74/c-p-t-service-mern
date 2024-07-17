const express = require("express");
const newsController = require("../Controllers/NewsC"); // Import the news controller

const router = express.Router();

// Get all news articles
router.get("/", async (req, res) => {
  try {
    const news = await newsController.getAllNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific news article by ID
router.get("/:id", async (req, res) => {
  try {
    const news = await newsController.getNewsById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create a new news article
router.post("/", async (req, res) => {
  try {
    const savedArticle = await newsController.createNews(req.body);
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a news article by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedArticle = await newsController.updateNews(
      req.params.id,
      req.body
    );
    res.json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a news article by ID
router.delete("/:id", async (req, res) => {
  try {
    await newsController.deleteNews(req.params.id);
    res.json({ message: "News article deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
