import React, { useState } from "react";

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "admin" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Authentication</h2>

      <input placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={login} style={styles.btn}>Login</button>
    </div>
  );
}

const styles = {
  box: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    background: "#fce4ec",
    textAlign: "center"
  },
  input: { width: "100%", padding: "8px", marginBottom: "10px" },
  btn: { background: "#c2185b", color: "white", padding: "8px", border: "none" }
};
