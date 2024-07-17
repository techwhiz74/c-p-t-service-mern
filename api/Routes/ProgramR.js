const express = require("express");
const programController = require("../Controllers/ProgramC");

const router = express.Router();

// Get all programs
router.get("/", async (req, res) => {
  try {
    const programs = await programController.getAllPrograms();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific program by ID
router.get("/:id", async (req, res) => {
  try {
    const program = await programController.getProgramById(req.params.id);
    res.json(program);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create a new program
router.post("/", async (req, res) => {
  try {
    const savedProgram = await programController.createProgram(req.body);
    res.status(201).json(savedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a program by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProgram = await programController.updateProgram(
      req.params.id,
      req.body
    );
    res.json(updatedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a program by ID
router.delete("/:id", async (req, res) => {
  try {
    await programController.deleteProgram(req.params.id);
    res.json({ message: "Program deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
