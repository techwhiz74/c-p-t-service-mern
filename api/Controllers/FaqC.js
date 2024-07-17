const FAQ = require('../modules/Faq'); 

// Get all FAQs
const getAllFAQs = async () => {
  try {
    const faqs = await FAQ.find();
    return faqs;
  } catch (error) {
    throw new Error('Error fetching FAQs');
  }
};

// Get a specific FAQ by ID
const getFAQById = async (id) => {
  try {
    const faq = await FAQ.findById(id);
    if (!faq) {
      throw new Error('FAQ not found');
    }
    return faq;
  } catch (error) {
    throw new Error('Error fetching FAQ');
  }
};

// Create a new FAQ
const createFAQ = async (data) => {
  try {
    const { question, answer } = data;
    const newFAQ = new FAQ({ question, answer });
    const savedFAQ = await newFAQ.save();
    return savedFAQ;
  } catch (error) {
    throw new Error('Error creating FAQ');
  }
};

// Update a FAQ by ID
const updateFAQ = async (id, data) => {
  try {
    const { question, answer } = data;
    const updatedFAQ = await FAQ.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );
    if (!updatedFAQ) {
      throw new Error('FAQ not found');
    }
    return updatedFAQ;
  } catch (error) {
    throw new Error('Error updating FAQ');
  }
};

// Delete a FAQ by ID
const deleteFAQ = async (id) => {
  try {
    const deletedFAQ = await FAQ.findByIdAndDelete(id);
    if (!deletedFAQ) {
      throw new Error('FAQ not found');
    }
  } catch (error) {
    throw new Error('Error deleting FAQ');
  }
};

module.exports = {
  getAllFAQs,
  getFAQById,
  createFAQ,
  updateFAQ,
  deleteFAQ,
};
