import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateNews() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/news/${id}`);
        setTitle(result.data.title);
        setDescription(result.data.description);
        setBody(result.data.body);
        setImageUrl(result.data.imageUrl); // Set the imageUrl state
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, [id]); // Make sure to include id in the dependencies array

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the new image URL along with other news details for update
      await axios.put(`http://localhost:8080/api/news/${id}`, {
        title,
        description,
        body,
        imageUrl: newImageUrl || imageUrl, // Use the newImageUrl if provided, otherwise keep the old imageUrl
      });
      window.location.href = '/news';
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Update News</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Current Image:</label>
          {imageUrl && <img src={imageUrl} alt="News" style={{ width: '100px' }} />}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateNews;
