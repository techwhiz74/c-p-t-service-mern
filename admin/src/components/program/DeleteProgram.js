import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Styles.css';

function DeleteProgram() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/program/${id}`);
        setProgram(result.data);
      } catch (error) {
        console.error('Error fetching Program:', error);
      }
    };

    fetchProgram();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/program/${id}`);
      navigate("/program");
    } catch (error) {
      console.error('Error deleting Program:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {program && (
        <>
          <h2 className="program-title">Delete Program</h2>
          <div className="program-details">
            <p>Title: {program.title}</p>
            <p>Description: {program.description}</p>
            <p>Duration: {program.duration}</p>
            <p>StartDate: {program.startDate}</p>
            <p>Information: {program.info}</p>
            <p>Link: {program.link}</p>
          </div>
          <p>Are you sure you want to delete this Program?</p>
          <div className="confirmation-buttons">
            <button className="delete" onClick={handleDelete}>Yes</button>
            <button className="create" onClick={() => navigate("/program")}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

export default DeleteProgram;
