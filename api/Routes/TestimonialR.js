const express = require("express");
const testimonialController = require("../Controllers/TestimonialC");

const router = express.Router();

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await testimonialController.getAllTestimonials();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await testimonialController.getTestimonialById(
      req.params.id
    );
    res.json(testimonial);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create a new testimonial
router.post("/", async (req, res) => {
  try {
    const savedTestimonial = await testimonialController.createTestimonial(
      req.body
    );
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a testimonial by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTestimonial = await testimonialController.updateTestimonial(
      req.params.id,
      req.body
    );
    res.json(updatedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a testimonial by ID
router.delete("/:id", async (req, res) => {
  try {
    await testimonialController.deleteTestimonial(req.params.id);
    res.json({ message: "Testimonial deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
