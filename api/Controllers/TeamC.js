const TeamMember = require('../modules/Team'); 

// Get all team members
const getAllTeamMembers = async () => {
  try {
    const teamMembers = await TeamMember.find();
    return teamMembers;
  } catch (error) {
    throw new Error('Error fetching team members');
  }
};

// Get a specific team member by ID
const getTeamMemberById = async (id) => {
  try {
    const teamMember = await TeamMember.findById(id);
    if (!teamMember) {
      throw new Error('Team member not found');
    }
    return teamMember;
  } catch (error) {
    throw new Error('Error fetching team member');
  }
};

// Create a new team member
const createTeamMember = async (data) => {
  try {
    const { name, description, facebook, instagram, linkedin, image, altText } = data;
    const newTeamMember = new TeamMember({
      name,
      description,
      facebook,
      instagram,
      linkedin,
      image,
      altText,
    });
    const savedTeamMember = await newTeamMember.save();
    return savedTeamMember;
  } catch (error) {
    throw new Error('Error creating team member');
  }
};

// Update a team member by ID
const updateTeamMember = async (id, data) => {
  try {
    const { name, description, facebook, instagram, linkedin, image, altText } = data;
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(
      id,
      {
        name,
        description,
        facebook,
        instagram,
        linkedin,
        image,
        altText,
      },
      { new: true }
    );
    if (!updatedTeamMember) {
      throw new Error('Team member not found');
    }
    return updatedTeamMember;
  } catch (error) {
    throw new Error('Error updating team member');
  }
};

// Delete a team member by ID
const deleteTeamMember = async (id) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(id);
    if (!deletedTeamMember) {
      throw new Error('Team member not found');
    }
  } catch (error) {
    throw new Error('Error deleting team member');
  }
};

module.exports = {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};
