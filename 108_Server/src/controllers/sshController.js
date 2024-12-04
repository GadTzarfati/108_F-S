import { Client } from 'ssh2';

export const handleSSHConnection = (req, res) => {
  const { host, username, password, command } = req.body;

  const conn = new Client();
  conn
    .on('ready', () => {
      conn.exec(command, (err, stream) => {
        if (err) {
          return res.status(500).json({ message: 'Command execution failed', error: err.message });
        }

        let output = '';
        stream
          .on('close', () => {
            conn.end();
            res.json({ output });
          })
          .on('data', (data) => {
            output += data.toString();
          })
          .stderr.on('data', (data) => {
            console.error('STDERR:', data.toString());
          });
      });
    })
    .on('error', (err) => {
      res.status(500).json({ message: 'SSH Connection Failed', error: err.message });
    })
    .connect({
      host,
      port: 22,
      username,
      password,
    });
};
