import { exec } from 'child_process';

/**
 * Handles the request to get the localhost and port from Ubuntu 22.04.5 LTS
 * 
 * This function runs `ifconfig` on the Ubuntu system through WSL, extracts the
 * localhost IP address and predefined port (7070), and returns it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getConnectionInfo = (req, res) => {
    const command = `wsl -d Ubuntu-22.04 ifconfig`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return res.status(500).json({ error: 'Failed to retrieve connection info' });
        }

        if (stderr) {
            console.error(`Command stderr: ${stderr}`);
            return res.status(500).json({ error: 'Failed to retrieve connection info' });
        }

        // Regular expression to extract the IP address
        const ipRegex = /inet (\d+\.\d+\.\d+\.\d+)/g;
        const matches = [];
        let match;

        // Collect all IP addresses
        while ((match = ipRegex.exec(stdout)) !== null) {
            matches.push(match[1]);
        }

        if (matches.length === 0) {
            console.error('No IP address found in ifconfig output');
            return res.status(500).json({ error: 'No IP address found' });
        }

        // Use the first IP found (external IP)
        const ip = matches[0];
        const port = 7070; // Predefined port

        console.log(`Retrieved IP: ${ip}, Port: ${port}`);
        res.status(200).json({ ip, port });
    });
};
