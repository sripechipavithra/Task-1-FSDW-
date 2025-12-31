// src/FullStack_Sample/Task11OnlineCabBooking.jsx
import React from "react";

const Task11OnlineCabBooking = () => {
  const bookCab = () => {
    const name = prompt("Enter your name:");
    if (!name) return alert("Name required");

    const pickup = prompt("Enter pickup location:");
    if (!pickup) return alert("Pickup location required");

    const drop = prompt("Enter drop location:");
    if (!drop) return alert("Drop location required");

    const confirmRide = confirm(
      `Confirm Cab Booking:\n\nName: ${name}\nPickup: ${pickup}\nDrop: ${drop}`
    );

    confirmRide
      ? alert("✅ Cab booked successfully!")
      : alert("❌ Booking cancelled");
  };

  return (
    <div style={styles.container}>
      <h1>Online Cab Booking</h1>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#79dae7ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
};

export default Task11OnlineCabBooking;