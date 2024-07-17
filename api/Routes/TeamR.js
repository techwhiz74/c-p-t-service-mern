const express = require("express");
const teamMemberController = require("../Controllers/TeamC");

const router = express.Router();

// Get all team members
router.get("/", async (req, res) => {
  try {
    const teamMembers = await teamMemberController.getAllTeamMembers();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific team member by ID
router.get("/:id", async (req, res) => {
  try {
    const teamMember = await teamMemberController.getTeamMemberById(
      req.params.id
    );
    res.json(teamMember);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create a new team member
router.post("/", async (req, res) => {
  try {
    const savedTeamMember = await teamMemberController.createTeamMember(
      req.body
    );
    res.status(201).json(savedTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a team member by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTeamMember = await teamMemberController.updateTeamMember(
      req.params.id,
      req.body
    );
    res.json(updatedTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a team member by ID
router.delete("/:id", async (req, res) => {
  try {
    await teamMemberController.deleteTeamMember(req.params.id);
    res.json({ message: "Team member deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
