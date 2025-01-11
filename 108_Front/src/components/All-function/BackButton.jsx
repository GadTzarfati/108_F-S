import React from 'react';
import { useNavigate } from 'react-router-dom'; // אם אתה משתמש ב-React Router
import './BackButton.css'; // נייבא את קובץ ה-CSS

const BackButton = () => {
    const navigate = useNavigate(); // מאפשר לנו לבצע ניווט חזור

    const handleBack = () => {
        navigate(-1); // חזרה לעמוד הקודם
    };

    return (
        <button className="back-button" onClick={handleBack}>
            ⬅ חזור
        </button>
    );
};

export default BackButton;
