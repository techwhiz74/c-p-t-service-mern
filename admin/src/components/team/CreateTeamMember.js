import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function CreateTeamMember() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [image, setImage] = useState('');
  const [altText, setAltText] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name,
      description,
      facebook,
      instagram,
      linkedin,
      image,
      altText,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/team/', requestData);
      console.log('Team member created successfully:', response.data);
      window.location.href = '/team-members';
    } catch (error) {
      console.error('Error creating team member:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Create Team Member</h2>
      {/* Form for creating a team member */}
      <form onSubmit={onSubmit}>
        {/* Input fields for team member details */}
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Facebook:</label>
          <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
        </div>
        <div>
          <label>Instagram:</label>
          <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <label>Alt Text:</label>
          <input type="text" value={altText} onChange={(e) => setAltText(e.target.value)} />
        </div>
        {/* Button to submit the form */}
        <button className="create">Create</button>
      </form>
    </div>
  );
}

export default CreateTeamMember;
