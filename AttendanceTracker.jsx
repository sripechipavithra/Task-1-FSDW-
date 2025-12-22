
import React, { useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", present: false },
    { id: 2, name: "Anita", present: false },
    { id: 3, name: "Suresh", present: false },
    { id: 4, name: "Meena", present: false },
    { id: 5, name: "Riya", present: false },
    { id: 6, name: "Vijay", present: false },
    { id: 7, name: "Ajith", present: false },
    { id: 8, name: "Priya", present: false },
    { id: 9, name: "Kiran", present: false },
    { id: 10, name: "Meera", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2> Attendance Tracker</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} style={styles.tr}>
              <td style={styles.td}>{student.name}</td>
              <td
                style={{
                  ...styles.td,
                  color: student.present ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {student.present ? "Present" : "Absent"}
              </td>
              <td style={styles.td}>
                <button
                  onClick={() => toggleAttendance(student.id)}
                  style={{
                    backgroundColor: student.present ? "#f44336" : "#4CAF50",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    borderRadius: "6px",
                  }}
                >
                  Mark {student.present ? "Absent" : "Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: "65%",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 12px", 
  },
  th: {
    padding: "14px",
    fontSize: "16px",
    backgroundColor: "#c8f1c8de",
  },
  tr: {
    backgroundColor: "#dfd9d981",
  },
  td: {
    padding: "14px 20px", 
    fontSize: "15px",
  },
};

export default Student;
