import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; // Import the CSS file

function CreateFaq() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      question: question,
      answer: answer
    };

    try {
      const response = await axios.post('http://localhost:8080/api/faq/', requestData);
      console.log('Faq created successfully:', response.data);
      window.location.href = '/faq';
    } catch (error) {
      console.error('Error creating Faq:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Create Faq</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Question:</label>
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </div>
        <div>
          <label>Answer:</label>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </div>
        <button className="create">Create</button>
      </form>
    </div>
  );
}

export default CreateFaq;
