import React, { useState } from "react";

export default function SimpleNotification() {
  const [notifications, setNotifications] = useState([]);

  function addNotification() {
    setNotifications([...notifications, "You have a new notification"]);
  }

  return (
    <div style={styles.box}>
      <h3>Dashboard</h3>

      <button onClick={addNotification} style={styles.button}>
        Add Notification
      </button>

      {notifications.length === 0 && <p>No notifications</p>}

      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  box: {
    width: "300px",
    margin: "100px auto",
    padding: "15px",
    border: "1px solid #ccc",
    textAlign: "center"
  },
  button: {
    padding: "6px 10px",
    marginBottom: "10px",
    background: "#1976d2",
    color: "white",
    border: "none"
  }
};
