import React from "react";
import { useLocation } from "react-router-dom";
import './MachinsStyle/Machines.css';
import ButtonSSH from "../All-function/ButtonSSH";
import ButtonTELNET from "../All-function/ButtonTELNET";
import ButtonCLI from "../All-function/ButtonCLI";
import BackButton from "../All-function/BackButton";

const MachinA = () => {
    const location = useLocation();
    const product = location.state;

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="product-details-container">
            <BackButton />
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

export default MachinA;