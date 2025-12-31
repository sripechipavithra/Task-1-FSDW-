import React, { useState } from "react";

export default function LoginRole() {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "student") {
      alert("Redirecting to Student Dashboard");
    } else if (role === "admin") {
      alert("Redirecting to Admin Dashboard");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Login</h2>

      <select onChange={(e) => setRole(e.target.value)} style={styles.input}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleLogin} style={styles.btn}>Login</button>
    </div>
  );
}

const styles = {
  box: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    textAlign: "center",
    background: "#e3f2fd"
  },
  input: { width: "100%", padding: "8px", marginBottom: "10px" },
  btn: { padding: "8px 20px", background: "#1976d2", color: "white", border: "none" }
};
