import { exec } from 'child_process';

/**
 * 1. פונקציה לפתיחת חלון CMD גלוי למשתמש.
 */
export const openCommandPrompt = (req, res) => {
  const command = 'start cmd';

  // שינוי סביבת העבודה של הפקודה לתיקייה myDocker
  exec(command, { cwd: 'C:\\Users\\v0535\\OneDrive\\שולחן העבודה\\myDocker' }, (error) => {
    if (error) {
      console.error(`Error opening Command Prompt: ${error.message}`);
      return res.status(500).json({
        message: 'Failed to open Command Prompt',
        error: error.message,
      });
    }
    res.json({
      message: 'Command Prompt opened successfully in myDocker folder',
    });
  });
};

/**
 * 2. פונקציה להרצת פקודות Docker מאחורי הקלעים והפעלת SSH.
 */
export const runSshInDocker = (req, res) => {
  console.log('Starting Docker container...');

  // פקודה להרצת Docker ברקע עם פורט 2222
  const dockerCommand = 'docker run -d -p 2222:22 --name hidden-ssh ubuntu-net-tools';

  exec(dockerCommand, (error, stdout) => {
    if (error) {
      console.error(`Error running Docker container: ${error.message}`);
      return res.status(500).json({
        message: 'Failed to run Docker container',
        error: error.message,
      });
    }

    console.log(`Docker container started successfully. Container ID: ${stdout.trim()}`);

    // פקודה לבדוק שהקונטיינר רץ
    const checkContainer = 'docker ps --filter "name=hidden-ssh" --format "{{.Names}}"';

    exec(checkContainer, (checkError, checkOutput) => {
      if (checkError || !checkOutput.trim()) {
        console.error('Container is not running.');
        return res.status(500).json({
          message: 'Docker container failed to start.',
        });
      }

      console.log('Container is running. Starting SSH service...');

      // הפעלת SSH בתוך הקונטיינר
      const sshCommand = 'docker exec hidden-ssh service ssh start';
      exec(sshCommand, (sshError) => {
        if (sshError) {
          console.error(`Error starting SSH service: ${sshError.message}`);
          return res.status(500).json({
            message: 'Failed to start SSH service',
            error: sshError.message,
          });
        }

        console.log('SSH service started successfully.');
        res.json({
          message: 'Docker container and SSH started successfully',
          connectionInfo: 'Connect using: ssh root@localhost -p 2222',
        });
      });
    });
  });
};
