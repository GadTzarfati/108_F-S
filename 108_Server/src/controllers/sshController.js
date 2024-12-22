import { exec } from 'child_process';
import path from 'path';

export const runDockerSSH = (req, res) => {
  const dockerPath = 'C:\\Users\\v0535\\OneDrive\\שולחן העבודה\\myDocker';

  // משתנה לפקודת הפעלת הקונטיינר
  const runContainerCommand = `cd /d ${dockerPath} && docker run -p 2222:22 -itd ubuntu-net-tools`;

  // הפעלת הקונטיינר
  exec(runContainerCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Docker container: ${error.message}`);
      return res.status(500).json({
        message: 'Failed to start Docker container',
        error: error.message,
      });
    }

    console.log(`Container started: ${stdout || stderr}`);

    //    ID      הקונטיינר
    const getContainerIdCommand = `docker ps -q -f ancestor=ubuntu-net-tools`;
    exec(getContainerIdCommand, (idError, containerId) => {
      if (idError || !containerId.trim()) {
        console.error(`Error fetching container ID: ${idError?.message || 'No container ID found'}`);
        return res.status(500).json({
          message: 'Failed to fetch container ID',
          error: idError?.message || 'No container ID found',
        });
      }

      // הפעלת SSH בתוך הקונטיינר
      const startSSHCommand = `docker exec ${containerId.trim()} service ssh start`;
      exec(startSSHCommand, (sshError, sshStdout, sshStderr) => {
        if (sshError) {
          console.error(`Error starting SSH service: ${sshError.message}`);
          return res.status(500).json({
            message: 'Failed to start SSH service',
            error: sshError.message,
          });
        }

        console.log(`SSH service started: ${sshStdout || sshStderr}`);

        // פתיחת חלון CMD נוסף לחיבור ל-SSH
        const openCmdCommand = `start cmd /k "ssh root@localhost -p 2222"`;
        exec(openCmdCommand, (cmdError) => {
          if (cmdError) {
            console.error(`Error opening CMD for SSH: ${cmdError.message}`);
            return res.status(500).json({
              message: 'Failed to open CMD for SSH connection',
              error: cmdError.message,
            });
          }

          console.log('CMD window opened for SSH connection');
          res.json({
            message: 'Docker container started, SSH service initiated, and CMD window opened',
            connectionInfo: 'Connect using: ssh root@localhost -p 2222',
          });
        });
      });
    });
  });
};
