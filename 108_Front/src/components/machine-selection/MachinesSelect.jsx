import React from "react";
import MachinACards from "../MachinesCards/MachinACards";
import MachinBCards from "../MachinesCards/MachinBCards";
import MachinCCards from "../MachinesCards/MachinCCards";
import BackButton from "../All-function/BackButton";

const MachinesSelect = () => {
    return (
        <div className="product-cards-container">
            <BackButton />
            <MachinACards />
            <MachinBCards />
            <MachinCCards />
        </div>
    );
};

export default MachinesSelect;