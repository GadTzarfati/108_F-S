import React, { useState } from "react";
import axios from "axios";
import os from "os"; // ייבוא os לזיהוי מערכת ההפעלה

const getCommand = (command) => {
  const isWindows = navigator.userAgent.indexOf("Win") !== -1;
  if (isWindows && command === "ls") {
    return "dir"; // החלף את ls ב-dir ב-Windows
  }
  return command;
};


const ButtonCLI = () => {
  const [isVisible, setIsVisible] = useState(false); // מצב נראות CLI
  const [command, setCommand] = useState(""); // קלט הפקודה
  const [output, setOutput] = useState([]); // פלט הפקודות

  const toggleCLI = () => {
    setIsVisible((prev) => !prev);
  };

  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    // השתמש בפונקציה getCommand כדי לתקן את הפקודה
    const fixedCommand = getCommand(command);

    try {
      const response = await axios.post("http://localhost:5000/api/cli", {
        command: fixedCommand, // שלח את הפקודה המתוקנת לשרת
      });
      setOutput((prevOutput) => [
        ...prevOutput,
        `C:\\Users\\YourUser> ${command}`,
        response.data.output,
      ]);
    } catch (error) {
      setOutput((prevOutput) => [
        ...prevOutput,
        `C:\\Users\\YourUser> ${command}`,
        `Error: ${error.response?.data?.error || error.message}`,
      ]);
    }
    setCommand(""); // איפוס הקלט
  };

  return (
    <div>
      <div className="cli-icon" onClick={toggleCLI}>
        <div className="cli-button">
          <i className="fas fa-code"></i>
        </div>
        <p>CLI</p>
      </div>

      {isVisible && (
        <div className="cli-container">
          <div className="cli-header">
            <span>Microsoft Windows [Version 10.0.22631.4460]</span>
            <button className="cli-close-button" onClick={toggleCLI}>
              ✖
            </button>
          </div>
          <div className="cli-output">
            {output.map((line, index) => (
              <pre key={index}>{line}</pre>
            ))}
          </div>
          <form onSubmit={handleCommandSubmit} className="cli-input-form">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter command"
              className="cli-input"
            />
            <button type="submit" className="cli-submit-button">
              Run
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ButtonCLI;
