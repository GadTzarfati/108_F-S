import MachinesModel from '../models/machinesModel.js';

// בדיקה של קבלת כל המכונות
console.log("=== Get All Machines ===");
console.log(MachinesModel.getAllMachines());

// בדיקה של הוספת מכונה חדשה
console.log("=== Add New Machine ===");
MachinesModel.addMachine({
  id: 4,
  name: "Device D",
  description: "New device for testing.",
  image: "https://example.com/device-d.jpg",
});
console.log(MachinesModel.getAllMachines());

// בדיקה של עדכון מכונה קיימת
console.log("=== Update Machine ===");
MachinesModel.updateMachine(4, { name: "Updated Device D", description: "Updated description." });
console.log(MachinesModel.getAllMachines());

// בדיקה של מחיקת מכונה
console.log("=== Delete Machine ===");
MachinesModel.deleteMachine(4);
console.log(MachinesModel.getAllMachines());

// בדיקה של חיפוש מכונה לפי ID
console.log("=== Get Machine By ID ===");
console.log(MachinesModel.getMachineById(1));
