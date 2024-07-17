import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsDetail({ match }) {
 const [news, setNews] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:8080/api/news/${match.params.id}`,
      );

      setNews(result.data);
    };

    fetchData();
 }, []);

 return (
    <div className="dashboard-container">
      <h2>News Detail</h2>
      <table>
        <thead>
          <tr>
            <th>Image Url</th>
            <th>Title</th>
            <th>Description</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr key={news._id}>
            <td>{news.imageUrl}</td>
            <td>{news.title}</td>
            <td>{news.description}</td>
            <td>{news.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
 );
}

export default NewsDetail;