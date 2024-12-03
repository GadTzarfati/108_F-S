import React from "react";

const MachinA = () => {
    const products = 
        {
            id: 1,
            name: "Device A",
            description: "High-performance device for SSH and Telnet connections.",
            image: "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

export default MachinA;