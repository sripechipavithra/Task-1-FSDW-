import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [allFeedback, setAllFeedback] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && feedback) {
      setAllFeedback([
        ...allFeedback,
        { studentName: name, message: feedback },
      ]);

      setName("");
      setFeedback("");
    }
  };

  return (
    <div className="feedback-container">
      <style>{`
        .feedback-container {
          width: 400px;
          margin: 40px auto;
          padding: 20px;
          border-radius: 10px;
          background: #f4f6ff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          font-family: Arial;
        }

        h2 {
          text-align: center;
          color: #4b2cc4;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          margin-top: 12px;
          padding: 10px;
          background: #4b2cc4;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #361aa5;
        }

        .feedback-list {
          margin-top: 20px;
        }

        .feedback-item {
          background: white;
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
      `}</style>

      <h2>Student Feedback</h2>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          rows="3"
          placeholder="Write your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Display Feedback */}
      <div className="feedback-list">
        {allFeedback.map((item, index) => (
          <div className="feedback-item" key={index}>
            <strong>{item.studentName}</strong>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackForm;
