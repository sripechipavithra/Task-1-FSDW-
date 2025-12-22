import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ width: "80%", margin: "30px auto", textAlign: "center" }}>
      <h3>Task List</h3>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <table
  border="0"
  width="100%"
  style={{
    marginTop: "20px",
    borderCollapse: "separate",
    borderSpacing: "8px"
  }}
>
        <th style={{ padding: "30px" }}>Task</th>
<th style={{ padding: "12px" }}>Action</th>


        <tbody>
          {tasks.map((t, index) => (
            <tr key={index}>
              <td>{t}</td>
              <td>
                <button onClick={() => removeTask(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
