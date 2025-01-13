import os from 'os';

/**
 * Handles the request to get the connection information.
 * 
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
    const getLocalIpAddress = () => {
        const interfaces = os.networkInterfaces();
        for (const interfaceName in interfaces) {
            for (const iface of interfaces[interfaceName]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address;
                }
            }
        }
        return null;
    };

    const ipAddress = getLocalIpAddress();

    if (ipAddress) {
        res.status(200).json({ ip: ipAddress, port: 7070 });
    } else {
        res.status(500).json({ error: 'No external IP address found' });
    }
};


/// Task for making an automated putty connection to the server (for telnet connectivity)
/// 1. Install putty on the client
/// 2. Using Electron create a script that will run putty with the required parameters
/// 3. Test the connection to the server


// The responsiblity for this task is on the client side, so the server side is done for now.
// the server should be able to provide the client with the required information to connect to the server via telnet.