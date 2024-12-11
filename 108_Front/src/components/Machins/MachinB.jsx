import React from "react";
import { useLocation } from "react-router-dom";
import ButtonSSH from "../All-function/ButtonSSH";
import ButtonTELNET from "../All-function/ButtonTELNET";
import ButtonCLI from "../All-function/ButtonCLI";

const MachinB = () => {
    const location = useLocation();
    const product = location.state;

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="product-details-container">
            <img
                src={product.image}
                alt={product.name}
                className="product-details-image"
            />
            <h1 className="product-details-title">{product.name}</h1>
            <p className="product-details-description">{product.description}</p>
            <div className="button-container">
            <ButtonSSH />
            <ButtonTELNET />
            <ButtonCLI />
            </div>
        </div>
    );
};

export default MachinB;