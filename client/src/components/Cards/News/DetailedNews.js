import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailedNews.css';

function DetailedNews() {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    // Fetch news detail using the API endpoint that supports fetching by _id
    axios.get(`http://localhost:8080/api/news/${id}`) // Update the endpoint URL
      .then((response) => {
        setNewsDetail(response.data); // Set the fetched news detail in state
      })
      .catch((error) => {
        console.error('Error fetching news detail:', error);
      });
  }, [id]);

  if (!newsDetail) {
    return <div>Loading...</div>; // You can display a loading indicator
  }

  return (
    <div className="detailedNewsContainer">
      <h2 className="detailedNewsTitle">{newsDetail.title}</h2>
      <div className="detailedNewsContent">
        <img src={newsDetail.imageUrl} alt="news" />
        <p>{newsDetail.description}</p>
        <p>{newsDetail.body}</p>
      </div>
    </div>
  );
}

export default DetailedNews;
