import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import the CSS file

function TestimonialList() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/testimonials');
        setTestimonial(result.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Testimonial List</h2>
      <Link to="/create-testimonial" className="create">Create Testimonial</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Testimonial</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonial.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td><img src={item.image} alt="Testimonial" style={{ width: '100px' }} /></td>
              <td>{item.testimonie}</td>
              <td>
                <Link to={`/update-testimonial/${item._id}`} className="update">Update</Link>
                {/* Updated the Link for the delete button */}
                <Link to={`/delete-testimonial/${item._id}`} className="delete">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestimonialList;
