// src/FullStack_Sample/Task12EventRegistration.jsx
import React, { useState } from "react";

const Task12EventRegistration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    agree: false,
  });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (!form.name.trim()) return alert("Name is required");
    if (!validateEmail(form.email)) return alert("Valid email required");
    if (!/^\d{10}$/.test(form.phone))
      return alert("Phone must be 10 digits");
    if (!form.event) return alert("Select an event");
    if (!form.agree) return alert("Accept terms to continue");

    confirm(
      `Confirm Registration:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent: ${form.event}`
    ) && alert("✅ Event Registered Successfully");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Event Registration</h1>

        <input
          style={styles.input}
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          style={styles.input}
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          style={styles.input}
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <select
          style={styles.input}
          value={form.event}
          onChange={(e) => setForm({ ...form, event: e.target.value })}
        >
          <option value="">Select Event</option>
          <option>Tech Conference</option>
          <option>AI Workshop</option>
          <option>Web Development Bootcamp</option>
        </select>

        <label style={styles.checkbox}>
          <input
            type="checkbox"
            onChange={(e) => setForm({ ...form, agree: e.target.checked })}
          />
          <span>I agree to the terms & conditions</span>
        </label>

        <button style={styles.button} onClick={handleSubmit}>
          Register Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background:
      "linear-gradient(135deg, #6a11cb, #2575fc)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "14px",
    width: "380px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    color: "#000",
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #aaa",
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#000",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "14px",
    fontSize: "18px",
    backgroundColor: "#6a11cb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Task12EventRegistration;