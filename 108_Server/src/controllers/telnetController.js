import { exec } from 'child_process';

export const openUbuntuAndStartNC = (req, res) => {
    const openTerminalCommand = `wt -w 0 wsl -d Ubuntu-22.04 -- bash -c "nc -l -k -v -p 7070"`;
    const getIPCommand = `wsl -d Ubuntu-22.04 -- bash -c "hostname -I | awk '{print $1}'"`;

    exec(openTerminalCommand, (error, stdout, stderr) => {
        if (error) {
            console.error("Error opening terminal and starting nc:", error.message);
            return res.status(500).json({ error: 'Failed to open terminal and start nc' });
        }

        console.log("Terminal and nc command started successfully.");

        // Fetch the IP address after starting the terminal
        exec(getIPCommand, (ipError, ipStdout, ipStderr) => {
            if (ipError) {
                console.error("Error fetching IP:", ipError.message);
                return res.status(500).json({ error: 'Failed to fetch IP' });
            }

            if (ipStderr) {
                console.error("IP stderr:", ipStderr);
            }

            const ip = ipStdout.trim();
            const port = 7070;

            console.log(`Retrieved IP: ${ip}, Port: ${port}`);
            res.status(200).json({ ip, port });
        });
    });
};
