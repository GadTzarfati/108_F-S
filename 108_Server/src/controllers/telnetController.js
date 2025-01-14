import os from 'os';

/**
 * Handles the request to get the connection information.
 * This function retrieves the local IP address of the server and responds with
 * the IP address and a predefined port (7070). If no external IP address is found,
 * it responds with an error message.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * 
 * @returns {void} - Sends a JSON response with the IP address and port, or an error message.
 * 
 * @example
 * // Example response when an external IP address is found:
 * // HTTP/1.1 200 OK
 * // Content-Type: application/json
 * // {
 * //   "ip": "192.168.1.2",
 * //   "port": 7070
 * // }
 * 
 * @example
 * // Example response when no external IP address is found:
 * // HTTP/1.1 500 Internal Server Error
 * // Content-Type: application/json
 * // {
 * //   "error": "No external IP address found"
 * // }
 */
export const getConnectionInfo = (req, res) => {
    // Function to get the local IP address
    const getLocalIPAddress = () => {
        const interfaces = os.networkInterfaces();
        for (const interfaceName in interfaces) {
            for (const iface of interfaces[interfaceName]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address; // Return the external IPv4 address
                }
            }
        }
        return null; // Return null if no external IP address is found
    };

    const ip = getLocalIPAddress(); // Get the local IP address

    if (ip) {
        console.log(`Retrieved IP: ${ip}`);
        res.status(200).json({ ip, port: 7070 }); // Respond with IP and port
    } else {
        console.error('No external IP address found');
        res.status(500).json({ error: 'No external IP address found' }); // Respond with an error
    }
};
