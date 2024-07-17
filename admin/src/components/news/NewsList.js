import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import the CSS file

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/news');
        setNews(result.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>News List</h2>
      <Link to="/create" className="create">Create News</Link>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item._id}>
              <td><img src={item.imageUrl} alt="News" style={{ width: '100px' }} /></td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.body.slice(0, 50)}...</td>
              <td>
                <Link to={`/update/${item._id}`} className="update">Update</Link>
                {/* Updated the Link for the delete button */}
                <Link to={`/delete/${item._id}`} className="delete">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsList;
