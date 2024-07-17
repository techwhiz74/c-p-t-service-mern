// Import necessary modules and styles
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Styles.css';

function TeamMemberList() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/team');
        setTeamMembers(result.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Team Members List</h2>
      {/* Link to the create team member page */}
      <Link to="/create-team-member" className="create">Create Team Member</Link>
      {/* Table to display team member information */}
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the team members and display them in the table */}
          {teamMembers.map((item) => (
            <tr key={item._id}>
              <td><img src={item.image} alt={item.altText} style={{ width: '100px' }} /></td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              {/* Updated the Link for the delete button */}
              <td>
                <Link to={`/update-team-member/${item._id}`} className="update">Update</Link>
                <Link to={`/delete-team-member/${item._id}`} className="delete">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamMemberList;
