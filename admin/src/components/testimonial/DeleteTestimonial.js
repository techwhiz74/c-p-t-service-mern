import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Styles.css';

function DeleteTestimonial() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/testimonials/${id}`);
        setTestimonial(result.data);
      } catch (error) {
        console.error('Error fetching testimonial:', error);
      }
    };

    fetchTestimonial();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/testimonials/${id}`);
      navigate("/testimonials");
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {testimonial && (
        <>
          <h2 className="news-title">Delete Testimonial</h2>
          <div className="news-details">
            <p>Name: {testimonial.name}</p>
            <p>testimonial: {testimonial.testimonie}</p>
          </div>
          <p>Are you sure you want to delete this testimonial?</p>
          <div className="confirmation-buttons">
            <button className="delete" onClick={handleDelete}>Yes</button>
            <button className="create" onClick={() => navigate("/testimonials")}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

export default DeleteTestimonial;
