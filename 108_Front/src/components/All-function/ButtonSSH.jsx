import React from "react";
import axios from "axios";

const ButtonSSH = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/ssh/start-ssh");
      console.log("SSH Response:", response.data);
    } catch (error) {
      console.error("Error connecting to SSH:", error.response?.data || error.message);
    }
  };

  return (
    <div className="button-ssh-container" onClick={handleClick}>
      <div className="ssh-button">
        <i className="fas fa-terminal icon-ssh"></i>
      </div>
      <p className="ssh-text">SSH</p>
    </div>
  );
};

export default ButtonSSH;

