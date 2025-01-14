import React, { useState } from "react";
import './ButtonTELNET.css';

const ButtonTELNET = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ ip: "N/A", port: "N/A" });

  const handleClick = async () => {
    if (onClick) {
      onClick(); // פעולה מותאמת אישית, אם נדרשת
    }

    // בקשה לשרת לקבלת IP ו-Port
    try {
      const response = await fetch("http://localhost:5000/api/telnet/info");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result); // שמירת המידע
      setIsOpen(true); // פתיחת הפופ-אפ

      // שליחת נתונים ל-main process (Electron)
      window.electron.openPutty(result);
    } catch (error) {
      console.error("Error fetching Telnet info:", error.message);
      alert("שגיאה בהבאת המידע מהשרת. אנא בדוק את החיבור.");
    }
  };

  return (
    <>
      {/* הכפתור המקורי */}
      <div className="button-telnet-container" onClick={handleClick}>
        <div className="telnet-button">
          <i className="fas fa-network-wired icon-telnet"></i> {/* אייקון TELNET */}
        </div>
        <p className="telnet-text">TELNET</p>
      </div>

      {/* פופ-אפ להצגת המידע */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Telnet Info</h3>
            <p><strong>IP:</strong> {data.ip}</p>
            <p><strong>Port:</strong> {data.port}</p>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              סגור
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonTELNET;
