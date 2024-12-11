import React from "react";
import { useNavigate } from "react-router-dom";

const MachinBCards = () => {
    const navigate = useNavigate();


    const products = 
        {
            id: 2,
            name: "Device B",
            description: "Ideal for chip debugging with advanced features.",
            image: "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=800",
        };
        const handleCardClick = () => {
            navigate(`/products/machin_b`, { state: products });
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

export default MachinBCards;