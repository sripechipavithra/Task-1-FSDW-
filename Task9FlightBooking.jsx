import React from "react";

function Task9FlightBooking() {
  const bookTicket = () => {
    // Prompt dialogs
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const source = prompt("Enter Source City:");
    if (!source) {
      alert("Booking cancelled: Source is required.");
      return;
    }

    const destination = prompt("Enter Destination City:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${name}\nFrom: ${source}\nTo: ${destination}`
    );

    if (confirmBooking) {
      alert("✅ Flight Ticket Booked Successfully!");
    } else {
      alert("❌ Booking Cancelled by User.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>✈️ Flight Ticket Booking</h2>
      <p>Book your flight using JavaScript dialog boxes</p>
      <button style={styles.button} onClick={bookTicket}>
        Book Flight Ticket
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#87CEEB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Arial, sans-serif"
  },
  button: {
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "2px solid white",
    backgroundColor: "#1E90FF",
    color: "white",
    cursor: "pointer"
  }
};

export default Task9FlightBooking;