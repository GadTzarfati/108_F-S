import React from "react";
import "./MachinesSelect.css";

const MachinesSelect = () => {
    const products = [
        {
            id: 1,
            name: "Device A",
            description: "High-performance device for SSH and Telnet connections.",
            image: "/images/device-a.jpg",
        },
        {
            id: 2,
            name: "Device B",
            description: "Ideal for chip debugging with advanced features.",
            image: "/images/device-b.jpg",
        },
        {
            id: 3,
            name: "Device C",
            description: "Optimized for real-time CLI operations.",
            image: "/images/device-c.jpg",
        },
    ];

    return (
        <div className="product-cards-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MachinesSelect;