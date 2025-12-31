import React, { useState } from "react";

export default function BlogComments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  function addComment() {
    if (comment !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  }

  return (
    <div style={styles.container}>
      <h2>My Blog Post</h2>
      <p>This is a simple blog layout with live comments.</p>

      <input
        type="text"
        placeholder="Write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={styles.input}
      />

      <button onClick={addComment} style={styles.button}>
        Add Comment
      </button>

      <h4>Comments</h4>
      {comments.length === 0 && <p>No comments yet</p>}

      {comments.map((c, index) => (
        <p key={index} style={styles.comment}>{c}</p>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "15px",
    border: "1px solid #ccc"
  },
  input: {
    width: "100%",
    padding: "6px",
    marginBottom: "8px"
  },
  button: {
    padding: "6px 12px",
    background: "#1976d2",
    color: "white",
    border: "none"
  },
  comment: {
    background: "#f1f1f1",
    padding: "5px",
    marginTop: "5px"
  }
};
