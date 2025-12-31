import React, { useState } from "react";

/* Home Page */
function Home() {
  return (
    <div>
      <h3>Welcome</h3>
      <p>This is the Student Management Dashboard.</p>
    </div>
  );
}

/* Students Page */
function Students() {
  const students = [
    { id: 1, name: "Anu", course: "BSc CS" },
    { id: 2, name: "Divya", course: "BCA" },
    { id: 3, name: "Meena", course: "BCom" }
  ];

  return (
    <div>
      <h3>Student List</h3>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Main Dashboard */
export default function StudentDashboard() {
  const [page, setPage] = useState("home");

  return (
    <div style={styles.container}>
      <h2>Student Management Dashboard</h2>

      {/* Navigation Buttons */}
      <div style={styles.nav}>
        <button onClick={() => setPage("home")} style={styles.btn}>
          Home
        </button>
        <button onClick={() => setPage("students")} style={styles.btn}>
          Students
        </button>
      </div>

      {/* Page Display */}
      {page === "home" && <Home />}
      {page === "students" && <Students />}
    </div>
  );
}

/* Styles */
const styles = {
  container: {
    width: "450px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    textAlign: "center",
    fontFamily: "Arial"
  },
  nav: {
    marginBottom: "20px"
  },
  btn: {
    margin: "0 10px",
    padding: "6px 12px",
    border: "none",
    background: "#1976d2",
    color: "white",
    cursor: "pointer"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px"
  }
};
