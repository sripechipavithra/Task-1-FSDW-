import React from "react";

const Task10HotelReservation = () => {
  const handleReservation = () => {
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    const hotel = prompt("Enter hotel name:");
    if (!hotel) {
      alert("Hotel name is required!");
      return;
    }

    const nights = prompt("Number of nights to stay:");
    if (!nights || isNaN(nights)) {
      alert("Please enter a valid number of nights!");
      return;
    }

    const confirmBooking = confirm(
      `Confirm your booking:\n\nName: ${name}\nHotel: ${hotel}\nNights: ${nights}`
    );

    if (confirmBooking) {
      alert("✅ Hotel booked successfully!");
    } else {
      alert("❌ Booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hotel Reservation System</h1>
      <p style={styles.text}>
        Click the button below to reserve your hotel room
      </p>
      <button style={styles.button} onClick={handleReservation}>
        Book Hotel
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f5f9ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "40px",
    color: "#222",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "14px 38px",
    fontSize: "18px",
    backgroundColor: "#4f8ef7",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Task10HotelReservation;