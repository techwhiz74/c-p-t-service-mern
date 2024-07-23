import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Styles.css';

function DeleteNews() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/news/${id}`);
        setNews(result.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/news/${id}`);
      navigate("/news");
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {news && (
        <>
          <h2 className="news-title">Delete News</h2>
          <div className="news-details">
            <p>Title: {news.title}</p>
            <p>Description: {news.description}</p>
          </div>
          <p>Are you sure you want to delete this news?</p>
          <div className="confirmation-buttons">
            <button className="delete" onClick={handleDelete}>Yes</button>
            <button className="create" onClick={() => navigate("/news")}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

export default DeleteNews;
