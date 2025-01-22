import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MachinesCards = () => {
    const [machines, setMachines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/api/machines")
            .then((response) => response.json())
            .then((data) => setMachines(data))
            .catch((error) => console.error("Error fetching machines:", error));
    }, []);

    const handleCardClick = (machine) => {
        // יצירת URL דינמי למכונה (לדוגמה: /products/machine_a)
        const machinePath = `/products/${machine.name2.toLowerCase().replace(/\s+/g, "_")}`;
        navigate(machinePath, { state: machine });
    };
 
    return (
        <div className="product-cards-container">
            {machines.map((machine) => (
                <div key={machine.id} className="product-card" onClick={() => handleCardClick(machine)}>
                    <img src={machine.image} alt={machine.name} className="product-image" />
                    <h2 className="product-title">{machine.name}</h2>
                    <p className="product-description">{machine.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MachinesCards;
