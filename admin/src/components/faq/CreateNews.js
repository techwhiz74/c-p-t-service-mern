import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; // Import the CSS file

function CreateNews() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      imageUrl: imageUrl,
      title: title,
      description: description,
      body: body,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/news/', requestData);
      console.log('News created successfully:', response.data);
      window.location.href = '/news';
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Create News</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} className="bigger-textarea"></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
        </div>
        <button className="create">Create</button>
      </form>
    </div>
  );
}

export default CreateNews;
