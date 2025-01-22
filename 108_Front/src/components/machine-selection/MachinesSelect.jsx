import React from "react";
import BackButton from "../All-function/BackButton";
import MachinesCards from "../MachinesCards/MachinesCards";

const MachinesSelect = () => {
    return (
        <div className="product-cards-container">
            <BackButton />
            <MachinesCards />
        </div>
    );
};

export default MachinesSelect;