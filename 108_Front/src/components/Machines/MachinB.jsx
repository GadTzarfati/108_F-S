import React from "react";

const MachinB = () => {
    const products = [
        {
            id: 2,
            name: "Device B",
            description: "Ideal for chip debugging with advanced features.",
            image: "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=800",
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

export default MachinB;