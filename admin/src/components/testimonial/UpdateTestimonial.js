import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateTestimonial() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [testimonie, setTestimonie] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/testimonials/${id}`);
        setName(result.data.name);
        setImage(result.data.image);
        setTestimonie(result.data.testimonie);
      } catch (error) {
        console.error('Error fetching testimonial:', error);
      }
    };

    fetchData();
  }, [id]); // Make sure to include id in the dependencies array

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the new image URL along with other news details for update
      await axios.put(`http://localhost:8080/api/testimonials/${id}`, {
        name,
        image,
        testimonie,
        image: newImageUrl || image, // Use the newImageUrl if provided, otherwise keep the old imageUrl
      });
      window.location.href = '/testimonials';
    } catch (error) {
      console.error('Error updating Tesimonial:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Update Testimonial</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Testimonial:</label>
          <input
            type="text"
            value={testimonie}
            onChange={(e) => setTestimonie(e.target.value)}
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
          {image && <img src={image} alt="Testimonial" style={{ width: '100px' }} />}
        </div>
        <button type="submit" className='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateTestimonial;
