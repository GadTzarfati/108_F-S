import React from "react";
import MachinA from "../Machines/MachinA";
import MachinB from "../Machines/MachinB";
import MachinC from "../Machines/MachinC";

const MachinesSelect = () => {
    return (
        <div className="product-cards-container">
        <MachinA />
        <MachinB />
        <MachinC /> 
        </div>
    );
};

export default MachinesSelect;