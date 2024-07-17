const Program = require("../modules/Program");

// Get all programs
const getAllPrograms = async () => {
  try {
    const programs = await Program.find();
    return programs;
  } catch (error) {
    throw new Error("Error fetching programs");
  }
};

// Get a specific program by ID
const getProgramById = async (id) => {
  try {
    const program = await Program.findById(id);
    if (!program) {
      throw new Error("Program not found");
    }
    return program;
  } catch (error) {
    throw new Error("Error fetching program");
  }
};

// Create a new program
const createProgram = async (data) => {
  try {
    const { title, description, duration, startDate, info, link } = data;
    const newProgram = new Program({
      title,
      description,
      duration,
      startDate,
      info,
      link,
    });
    const savedProgram = await newProgram.save();
    return savedProgram;
  } catch (error) {
    throw new Error("Error creating program");
  }
};

// Update a program by ID
const updateProgram = async (id, data) => {
  try {
    const { title, description, duration, startDate, info, link } = data;
    const updatedProgram = await Program.findByIdAndUpdate(
      id,
      { title, description, duration, startDate, info, link },
      { new: true }
    );
    if (!updatedProgram) {
      throw new Error("Program not found");
    }
    return updatedProgram;
  } catch (error) {
    throw new Error("Error updating program");
  }
};

// Delete a program by ID
const deleteProgram = async (id) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(id);
    if (!deletedProgram) {
      throw new Error("Program not found");
    }
  } catch (error) {
    throw new Error("Error deleting program");
  }
};

module.exports = {
  getAllPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
};
