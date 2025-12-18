import React, { useState } from "react";

function PollingApp() {
  const [question, setQuestion] = useState("Do you understand today’s topic?");
  const [options, setOptions] = useState({
    yes: 0,
    no: 0,
  });

  // Handle vote
  const vote = (option) => {
    setOptions({
      ...options,
      [option]: options[option] + 1,
    });
  };

  return (
    <div className="poll-container">
      <style>{`
        .poll-container {
          width: 350px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 10px;
          background: #f4f7ff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          font-family: Arial;
          text-align: center;
        }

        h2 {
          color: #3b49df;
        }

        button {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          background: #3b49df;
          color: white;
        }

        button:hover {
          background: #2c36b5;
        }

        .result {
          margin-top: 15px;
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>

      <h2>Classroom Poll</h2>
      <p>{question}</p>

      <button onClick={() => vote("yes")}>👍 Yes</button>
      <button onClick={() => vote("no")}>👎 No</button>

      <div className="result">
        <p>Yes Votes: {options.yes}</p>
        <p>No Votes: {options.no}</p>
      </div>
    </div>
  );
}

export default PollingApp;
