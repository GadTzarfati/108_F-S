import React from "react";
import MachinACards from "../MachinesCards/MachinACards";
import MachinBCards from "../MachinesCards/MachinBCards";
import MachinCCards from "../MachinesCards/MachinCCards";

const MachinesSelect = () => {
    return (
        <div className="product-cards-container">
        <MachinACards />
        <MachinBCards />
        <MachinCCards /> 
        </div>
    );
};

export default MachinesSelect;