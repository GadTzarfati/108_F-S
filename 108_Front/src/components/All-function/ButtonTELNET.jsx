import React from "react";

const ButtonTELNET = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // פעולה מותאמת אישית
    }
  };

  return (
    <div className="button-telnet-container" onClick={handleClick}>
      <div className="telnet-button">
        <i className="fas fa-network-wired icon-telnet"></i> {/* אייקון אחר עבור TELNET */}
      </div>
      <p className="telnet-text">TELNET</p>
    </div>
  );
};

export default ButtonTELNET;
