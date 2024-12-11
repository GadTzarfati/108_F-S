import { exec } from "child_process";

export const runCommand = (req, res) => {
  const { command } = req.body;

  // בדיקה אם הקלט ריק
  if (!command) {
    return res.status(400).json({ error: "No command provided" });
  }

  // הרצת הפקודה
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || error.message });
    }
    res.status(200).json({ output: stdout });
  });
};
