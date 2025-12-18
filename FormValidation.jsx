import React, { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // 1. Required Name
    if (!name.trim()) {
      formErrors.name = "Name is required";
    }

    // 2. Email Format (Regex)
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      formErrors.email = "Enter a valid email address";
    }

    // 3. Range Validation: Age must be between 18–60
    if (!age) {
      formErrors.age = "Age is required";
    } else if (age < 18 || age > 60) {
      formErrors.age = "Age must be between 18 and 60";
    }

    // 4. Phone Number 10 Digits
    if (!phone) {
      formErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Must be 10 digits";
    }

    // 5. Password Strength (Regex)
    if (!password) {
      formErrors.password = "Password is required";
    } else if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
      formErrors.password =
        "Must be 6+ chars, include 1 uppercase letter & 1 number";
    }

    // 6. Compare Validation
    if (!confirmPass) {
      formErrors.confirmPass = "Confirm your password";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log({ name, email, age, phone, password });
    }
  };

  return (
    <div className="container">
      <style>{`
        .container {
          width: 350px;
          margin: auto;
          padding: 20px;
          background: #f3f0ff;
          border: 2px solid #a18aff;
          border-radius: 12px;
          box-shadow: 0px 0px 10px #cfc7ff;
          font-family: Arial;
        }
        
        h2 {
          text-align: center;
          color: #4b2cc4;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 8px;
          border: 1px solid #b7a5ff;
          border-radius: 6px;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          margin-top: 12px;
          background-color: #4b2cc4;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background-color: #3b21a1;
        }

        p {
          color: red;
          font-size: 13px;
          margin: 4px 0 6px 0;
        }
      `}</style>

      <h2>Form Validation </h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>{errors.name}</p>

        {/* Email */}
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{errors.email}</p>

        {/* Age */}
        <input
          type="number"
          placeholder="Enter Age (18–60)"
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{errors.age}</p>

        {/* Phone */}
        <input
          type="text"
          placeholder="Enter Phone (10 digits)"
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>{errors.phone}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errors.password}</p>

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <p>{errors.confirmPass}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
