const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  }
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
