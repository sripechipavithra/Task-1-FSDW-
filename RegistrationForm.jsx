import React, { useState } from "react";

export default function RegistrationForm() {
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  }

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <form
        className="form-container"
        onSubmit={handleSubmit}
        style={{
          width: "320px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "8px",
          fontFamily: "Arial, sans-serif",
          color: "#111",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Comprehensive Registration Form
        </h2>

        <input type="text" name="name" placeholder="Student Name" required />
        <input type="password" name="password" placeholder="Password" required />
        <textarea name="address" placeholder="Address" rows="3" required></textarea>

        <div>
          Gender: <br />
          <input type="radio" name="gender" value="male" required /> Male
          <br />
          <input type="radio" name="gender" value="female" /> Female
        </div>

        <div>
          Skills: <br />
          <input type="checkbox" value="HTML" /> HTML <br />
          <input type="checkbox" value="CSS" /> CSS <br />
          <input type="checkbox" value="JavaScript" /> JavaScript
        </div>

        <select name="department" required style={{ width: "100%", padding: "8px", margin: "8px 0", borderRadius: "5px", border: "1px solid #999" }}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
        </select>

        <input
          type="file"
          onChange={(e) => setFileName(e.target.files[0]?.name)}
          style={{ margin: "8px 0" }}
        />
        {fileName && <div style={{ fontSize: "14px" }}>Selected File: {fileName}</div>}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            background: "blue",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
