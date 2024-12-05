import React from "react";
// import ButtonCLI from "../All-function/ButtonCLI";
// import ButtonTELNET from "../All-function/ButtonTELNET";
// import ButtonSSH from "../All-function/ButtonSSH";
import { useNavigate } from "react-router-dom";


const MachinACards = () => {
    const navigate = useNavigate();

    const products = 
        {
            id: 1,
            name: "Device A",
            description: "High-performance device for SSH and Telnet connections.",
            image: "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        };

        const handleCardClick = () => {
            navigate(`/products/machin_a`, { state: products });
        };
        
    return (
        <div className="product-cards-container">
                <div className="product-card" onClick={handleCardClick}>
                    <img src={products.image} alt={products.name} className="product-image" />
                    <h2 className="product-title">{products.name}</h2>
                    <p className="product-description">{products.description}</p>
                </div>
        </div>
    );
};

export default MachinACards;