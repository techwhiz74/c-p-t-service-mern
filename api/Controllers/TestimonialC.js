const Testimonial = require("../modules/Testimonial");

// Get all testimonials
const getAllTestimonials = async () => {
  try {
    const testimonials = await Testimonial.find();
    return testimonials;
  } catch (error) {
    throw new Error("Error fetching testimonials");
  }
};

// Get a specific testimonial by ID
const getTestimonialById = async (id) => {
  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      throw new Error("Testimonial not found");
    }
    return testimonial;
  } catch (error) {
    throw new Error("Error fetching testimonial");
  }
};

// Create a new testimonial
const createTestimonial = async (data) => {
  try {
    const { name, image, testimonie } = data;
    const newTestimonial = new Testimonial({ name, image, testimonie });
    const savedTestimonial = await newTestimonial.save();
    return savedTestimonial;
  } catch (error) {
    throw new Error("Error creating testimonial");
  }
};

// Update a testimonial by ID
const updateTestimonial = async (id, data) => {
  try {
    const { name, image, testimonie } = data;
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { name, image, testimonie },
      { new: true }
    );
    if (!updatedTestimonial) {
      throw new Error("Testimonial not found");
    }
    return updatedTestimonial;
  } catch (error) {
    throw new Error("Error updating testimonial");
  }
};

// Delete a testimonial by ID
const deleteTestimonial = async (id) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
    if (!deletedTestimonial) {
      throw new Error("Testimonial not found");
    }
  } catch (error) {
    throw new Error("Error deleting testimonial");
  }
};

module.exports = {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};

