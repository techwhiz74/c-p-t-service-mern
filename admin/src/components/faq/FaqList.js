import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import the CSS file

function FaqList() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/faq');
        setFaq(result.data);
      } catch (error) {
        console.error('Error fetching Faq:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Faq List</h2>
      <Link to="/create-faq" className="create">Create Faq</Link>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {faq.map((item) => (
            <tr key={item._id}>
              <td>{item.question}</td>
              <td>{item.answer}</td>
              <td>
                <Link to={`/update-faq/${item._id}`} className="update">Update</Link>
                {/* Updated the Link for the delete button */}
                <Link to={`/delete-faq/${item._id}`} className="delete">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FaqList;
