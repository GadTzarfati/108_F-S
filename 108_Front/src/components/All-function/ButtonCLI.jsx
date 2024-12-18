import React from "react";

const ButtonCLI = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // פעולה מותאמת אישית
    }
  };

  return (
    <div className="button-cli-container" onClick={handleClick}>
      <div className="cli-button">
        <i className="fas fa-terminal icon-cli"></i>
      </div>
      <p className="cli-text">CLI</p>
    </div>
  );
};

export default ButtonCLI;