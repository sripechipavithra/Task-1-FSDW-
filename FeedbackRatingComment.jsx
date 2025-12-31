import React, { useState } from "react";

export default function Feedback() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const submitFeedback = () => {
    alert(`Rating: ${rating}\nComment: ${comment}`);
  };

  return (
    <div style={styles.box}>
      <h2>Student Feedback</h2>

      <select onChange={(e) => setRating(e.target.value)} style={styles.input}>
        <option value="">Rating</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>

      <textarea placeholder="Comments"
        onChange={(e) => setComment(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={submitFeedback} style={styles.btn}>Submit</button>
    </div>
  );
}

const styles = {
  box: {
    width: "350px",
    margin: "80px auto",
    padding: "20px",
    background: "#e8f5e9",
    textAlign: "center"
  },
  input: { width: "100%", padding: "8px", marginBottom: "10px" },
  textarea: { width: "100%", height: "80px", marginBottom: "10px" },
  btn: { background: "#2e7d32", color: "white", padding: "8px", border: "none" }
};
