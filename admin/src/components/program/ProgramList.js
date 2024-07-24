import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import the CSS file

function ProgramList() {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/program');
        setProgram(result.data);
      } catch (error) {
        console.error('Error fetching Program:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Program List</h2>
      <Link to="/create-program" className="create">Create Program</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Start Date</th>
            <th>Information</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {program.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.duration}</td>
              <td>{item.startDate}</td>
              <td>{item.info}</td>
              <td>{item.link}</td>
              <td>
                <Link to={`/update-program/${item._id}`} className="update">Update</Link>
                {/* Updated the Link for the delete button */}
                <Link to={`/delete-program/${item._id}`} className="delete">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramList;
