import React from "react";


const ButtonSSH = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // פעולה מותאמת אישית
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
