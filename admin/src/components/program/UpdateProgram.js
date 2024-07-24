import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateProgram() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [info, setInfo] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/program/${id}`);
        setTitle(result.data.title);
        setDescription(result.data.description);
        setDuration(result.data.duration);
        setStartDate(result.data.startDate);
        setInfo(result.data.info);
        setLink(result.data.link);
      } catch (error) {
        console.error('Error fetching Program:', error);
      }
    };

    fetchData();
  }, [id]); // Make sure to include id in the dependencies array

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the new image URL along with other Program details for update
      await axios.put(`http://localhost:8080/api/program/${id}`, {
        title,
        description,
        duration,
        startDate,
        info,
        link
      });
      window.location.href = '/program';
    } catch (error) {
      console.error('Error updating Program:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Update Program</h2>
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
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>Info:</label>
          <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button type="submit" className='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateProgram;
