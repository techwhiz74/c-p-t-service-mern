import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; // Import the CSS file

function CreateProgram() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [info, setInfo] = useState('');
  const [link, setLink] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      title: title,
      description: description,
      duration: duration,
      startDate: startDate,
      info: info,
      link: link,
    };


    try {
      const response = await axios.post('http://localhost:8080/api/program/', requestData);
      console.log('Program created successfully:', response.data);
      window.location.href = '/program';
    } catch (error) {
      console.error('Error creating Program:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Create Program</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>
        <div>
          <label>StartDate:</label>
          <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>Info:</label>
          <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button className="create">Create</button>
      </form>
    </div>
  );
}

export default CreateProgram;
