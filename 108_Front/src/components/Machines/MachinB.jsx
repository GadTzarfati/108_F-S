import React from "react";

const MachinB = () => {
    const products = 
        {
            id: 2,
            name: "Device B",
            description: "Ideal for chip debugging with advanced features.",
            image: "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=800",
        };
    

    return (
        <div className="product-cards-container">
            <div className="product-card">
                <img src={products.image} alt={products.name} className="product-image" />
                <h2 className="product-title">{products.name}</h2>
                <p className="product-description">{products.description}</p>
            </div>
        </div>
    );
};

export default MachinB;