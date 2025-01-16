import fs from 'fs';
import path from 'path';

class MachinesModel {
  constructor() {
    // נתיב לקובץ JSON
    this.filePath = path.resolve('./src/data/machines.json');
    this.machines = this.loadMachines();
  }

  // טוען את המכונות מהקובץ JSON
  loadMachines() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading machines:', error);
      return [];
    }
  }

  // שומר את המכונות לקובץ JSON
  saveMachines() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.machines, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error saving machines:', error);
    }
  }

  // מחזיר את כל המכונות
  getAllMachines() {
    return this.machines;
  }

  // מחפש מכונה לפי ID
  getMachineById(id) {
    return this.machines.find((machine) => machine.id === id);
  }

  // מוסיף מכונה חדשה עם בדיקת ID ייחודי
  addMachine(machine) {
    if (!machine.id || !machine.name || !machine.description || !machine.image) {
      throw new Error('All machine properties (id, name, description, image) are required.');
    }
    if (this.machines.some((m) => m.id === machine.id)) {
      throw new Error('Machine ID already exists.');
    }
    this.machines.push(machine);
    this.saveMachines(); // שמירת המכונות לאחר הוספה
  }

  // מעדכן מכונה קיימת
  updateMachine(id, updatedData) {
    const machineIndex = this.machines.findIndex((machine) => machine.id === id);
    if (machineIndex === -1) {
      throw new Error('Machine not found.');
    }
    this.machines[machineIndex] = { ...this.machines[machineIndex], ...updatedData };
    this.saveMachines(); // שמירת המכונות לאחר עדכון
  }

  // מוחק מכונה
  deleteMachine(id) {
    const machineIndex = this.machines.findIndex((machine) => machine.id === id);
    if (machineIndex === -1) {
      throw new Error('Machine not found.');
    }
    this.machines.splice(machineIndex, 1);
    this.saveMachines(); // שמירת המכונות לאחר מחיקה
  }
}

export default new MachinesModel();
