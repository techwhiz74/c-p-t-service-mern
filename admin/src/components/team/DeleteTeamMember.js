import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Styles.css';

function DeleteTeamMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/team/${id}`);
        setTeamMember(result.data);
      } catch (error) {
        console.error('Error fetching team member:', error);
      }
    };

    fetchTeamMember();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/team/${id}`);
      navigate("/team-members");
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {teamMember && (
        <>
          <h2 className="news-title">Delete Team Member</h2>
          <div className="news-details">
            <p>Name: {teamMember.name}</p>
            <p>Description: {teamMember.description}</p>
          </div>
          <p>Are you sure you want to delete this team member?</p>
          <div className="confirmation-buttons">
            <button className="delete" onClick={handleDelete}>Yes</button>
            <button className="create" onClick={() => navigate("/team-members")}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

export default DeleteTeamMember;
