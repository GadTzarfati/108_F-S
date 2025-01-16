import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './src/routes/userRoutes.js';
import sshRouter from './src/routes/sshRoutes.js';
import cliRouter from './src/routes/cliRoutes.js';
import telnetRouter from './src/routes/telnetRoutes.js';
import MachinesModel from './src/models/machinesModel.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// מסלולים קיימים
app.use('/api/users', userRouter);
app.use('/api/ssh', sshRouter);
app.use('/api/cli', cliRouter);
app.use('/api/telnet', telnetRouter);

// מסלולים למכונות
app.get('/api/machines', (req, res) => {
  const machines = MachinesModel.getAllMachines();
  res.json(machines);
});

app.post('/api/machines', (req, res) => {
  try {
    MachinesModel.addMachine(req.body);
    res.status(201).json({ message: 'Machine added successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/machines/:id', (req, res) => {
  try {
    MachinesModel.updateMachine(parseInt(req.params.id), req.body);
    res.json({ message: 'Machine updated successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/machines/:id', (req, res) => {
  try {
    MachinesModel.deleteMachine(parseInt(req.params.id));
    res.json({ message: 'Machine deleted successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Middleware לשגיאות
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
