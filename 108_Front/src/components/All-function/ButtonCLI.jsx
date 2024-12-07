import React from "react";
import axios from "axios";

const ButtonCLI = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/cli", {
        command: "dir", // פקודה לדוגמה
      });
      console.log("CLI Response:", response.data);
    } catch (error) {
      console.error("Error executing CLI command:", error.response?.data || error.message);
    }
  };

  return (
    <div className="button-cli-container" onClick={handleClick}>
      <div className="cli-button">
        <i className="fas fa-code icon-cli"></i>
      </div>
      <p className="cli-text">CLI</p>
    </div>
  );
};

export default ButtonCLI;
