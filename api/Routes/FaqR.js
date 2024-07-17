const express = require("express");
const faqController = require("../Controllers/FaqC"); // Import the FAQ controller

const router = express.Router();

// Get all FAQs
router.get("/", async (req, res) => {
  try {
    const faqs = await faqController.getAllFAQs();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific FAQ by ID
router.get("/:id", async (req, res) => {
  try {
    const faq = await faqController.getFAQById(req.params.id);
    res.json(faq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create a new FAQ
router.post("/", async (req, res) => {
  try {
    const savedFAQ = await faqController.createFAQ(req.body);
    res.status(201).json(savedFAQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a FAQ by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedFAQ = await faqController.updateFAQ(req.params.id, req.body);
    res.json(updatedFAQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a FAQ by ID
router.delete("/:id", async (req, res) => {
  try {
    await faqController.deleteFAQ(req.params.id);
    res.json({ message: "FAQ deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
