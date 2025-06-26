import React, { useState } from 'react';
import axios from 'axios';

const UserFeedback = ({ userId }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5174/api/feedback', {
        userId,
        comment,
        rating,
      });
      setMessage('✅ Thank you for your feedback!');
      setComment('');
      setRating(5);
    } catch (error) {
      setMessage('❌ Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-form-container" style={styles.container}>
      <h3 style={styles.heading}>Leave Feedback</h3>
      {message && <p style={styles.message}>{message}</p>}
      <form onSubmit={handleFeedbackSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Your Comment:</label>
          <textarea
            style={styles.textarea}
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Rating (1–5):</label>
          <input
            type="number"
            style={styles.input}
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Simple inline styling (optional)
const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  message: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#2e7d32',
  },
};

export default UserFeedback;
