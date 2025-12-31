import React, { useState } from "react";

const Task14DynamicRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "",
    notes: "",
  });

  const workshops = [
    "React Basics",
    "Advanced React",
    "Vite & Modern JS",
    "Fullstack Development",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone, workshop } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name.trim()) {
      alert("Name is required!");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email!");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits!");
      return false;
    }
    if (!workshop) {
      alert("Please select a workshop!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!\n\n" + JSON.stringify(formData, null, 2));
      setFormData({
        name: "",
        email: "",
        phone: "",
        workshop: "",
        notes: "",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f0f4f8",
        color: "#333",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Form Section */}
      <div
        style={{
          flex: 1,
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginBottom: "30px", fontSize: "2rem" }}>
          Workshop Registration
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="workshop"
          value={formData.workshop}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Workshop</option>
          {workshops.map((w, index) => (
            <option key={index} value={w}>
              {w}
            </option>
          ))}
        </select>

        <textarea
          name="notes"
          placeholder="Additional notes..."
          value={formData.notes}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
        />

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            fontSize: "1rem",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      {/* Live Preview Section */}
      <div
        style={{
          flex: 1,
          padding: "50px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderLeft: "1px solid #ddd",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>Live Preview</h2>
        <p>
          <strong>Name:</strong> {formData.name || "-"}
        </p>
        <p>
          <strong>Email:</strong> {formData.email || "-"}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone || "-"}
        </p>
        <p>
          <strong>Workshop:</strong> {formData.workshop || "-"}
        </p>
        <p>
          <strong>Notes:</strong> {formData.notes || "-"}
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  marginBottom: "15px",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "100%",
  boxSizing: "border-box",
};

export default Task14DynamicRegistrationForm;
