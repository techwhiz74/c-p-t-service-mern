import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; // Import the CSS file

function CreateTestimonial() {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name: name,
      image: image,
      testimonial: testimonial
    };

    try {
      const response = await axios.post('http://localhost:8080/api/testimonials/', requestData);
      console.log('Testimonial created successfully:', response.data);
      window.location.href = '/testimonials';
    } catch (error) {
      console.error('Error creating testimonial:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Create Testimonial</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <label>Testimonial:</label>
          <textarea value={testimonial} onChange={(e) => setTestimonial(e.target.value)} />
        </div>
        <button className="create">Create</button>
      </form>
    </div>
  );
}

export default CreateTestimonial;
