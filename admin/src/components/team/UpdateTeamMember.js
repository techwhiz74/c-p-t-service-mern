// Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateTeamMember() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [image, setImage] = useState('');
  const [altText, setAltText] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/team/${id}`);
        setName(result.data.name);
        setDescription(result.data.description);
        setFacebook(result.data.facebook);
        setInstagram(result.data.instagram);
        setLinkedin(result.data.linkedin);
        setImage(result.data.image);
        setAltText(result.data.altText);
      } catch (error) {
        console.error('Error fetching team member:', error);
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/team/${id}`, {
        name,
        description,
        facebook,
        instagram,
        linkedin,
        image: newImage || image,
        altText,
      });
      window.location.href = '/team-members';
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Update Team Member</h2>
      <form onSubmit={onSubmit}>
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
          <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
        </div>
        <div>
          <label>Current Image:</label>
          {image && <img src={image} alt={altText} style={{ width: '100px' }} />}
        </div>
        <button type="submit" className='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateTeamMember;
