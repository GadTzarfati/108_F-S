import { exec } from 'child_process';
import express from 'express';
import os from 'os';

const router = express.Router();

export const runCommand = (req, res) => {
  const { command } = req.body;

  // בדיקה אם הפקודה חוקית
  if (!command) {
      return res.status(400).json({ error: 'Command is required' });
  }

  const allowedCommands = ['dir', 'ping', 'ipconfig'];
  if (!allowedCommands.includes(command.split(' ')[0])) {
      return res.status(403).json({ error: 'Command not allowed' });
  }

  // הרצת הפקודה
  exec(command, (error, stdout, stderr) => {
      if (error) {
          return res.status(500).json({ error: error.message });
      }
      if (stderr) {
          return res.status(400).json({ error: stderr });
      }
      res.status(200).json({ output: stdout });
  });
};


export default router;
