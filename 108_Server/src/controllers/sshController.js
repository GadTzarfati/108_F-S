import { exec } from 'child_process';

export const openCommandPrompt = (req, res) => {
  const command = 'start cmd';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening Command Prompt: ${error.message}`);
      return res.status(500).json({ message: 'Failed to open Command Prompt', error: error.message });
    }

    console.log('Command Prompt opened successfully');
    res.json({ message: 'Command Prompt opened successfully' });
  });
};
