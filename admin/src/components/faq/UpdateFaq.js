import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateFaq() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/faq/${id}`);
        setQuestion(result.data.question);
        setAnswer(result.data.answer);
      } catch (error) {
        console.error('Error fetching Faq:', error);
      }
    };

    fetchData();
  }, [id]); // Make sure to include id in the dependencies array

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the new image URL along with other Faq details for update
      await axios.put(`http://localhost:8080/api/faq/${id}`, {
        question,
        answer,
      });
      window.location.href = '/faq';
    } catch (error) {
      console.error('Error updating Faq:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Update Faq</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label>Answer:</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button type="submit" className='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateFaq;
