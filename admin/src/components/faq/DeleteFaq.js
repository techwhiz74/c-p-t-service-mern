import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Styles.css';

function DeleteFaq() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/faq/${id}`);
        setFaq(result.data);
      } catch (error) {
        console.error('Error fetching Faq:', error);
      }
    };

    fetchFaq();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/faq/${id}`);
      navigate("/faq");
    } catch (error) {
      console.error('Error deleting Faq:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {faq && (
        <>
          <h2 className="news-title">Delete Faq</h2>
          <div className="news-details">
            <p>Question: {faq.question}</p>
            <p>Answer: {faq.answer}</p>
          </div>
          <p>Are you sure you want to delete this Faq?</p>
          <div className="confirmation-buttons">
            <button className="delete" onClick={handleDelete}>Yes</button>
            <button className="create" onClick={() => navigate("/faq")}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

export default DeleteFaq;
