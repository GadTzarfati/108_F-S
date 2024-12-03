import React from "react";

const MachinC = () => {
    const products = [
        {
            id: 3,
            name: "Device C",
            description: "Optimized for real-time CLI operations.",
            image: "https://images.pexels.com/photos/6755091/pexels-photo-6755091.jpeg?auto=compress&cs=tinysrgb&w=800",
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

export default MachinC;