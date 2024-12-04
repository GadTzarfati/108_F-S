import { exec } from 'child_process'; // החלפת require ב-import

export const handleCLICommand = (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ message: 'Command is required' });
  }

  try {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ message: 'Command execution failed', error: error.message });
      }
      if (stderr) {
        return res.status(400).json({ message: 'Command execution error', error: stderr });
      }
      res.json({ output: stdout.trim() });
    });
  } catch (err) {
    console.error('Error executing CLI command:', err);
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};
