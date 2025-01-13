import net from 'net';


export const createTelnetConnection = (req, res) => {
    const { port } = req.body;

    if (!port) {
        return res.status(400).json({ error: 'Port is required' });
    }

    const host = '127.0.0.1'; // Set localhost as the host

    const connection = new net.Socket();

    connection.connect(port, host, () => {
        console.log(`Connected to Telnet server at ${host}:${port}`);
        res.status(200).json({ message: `Telnet server running at ${host}:${port}` });
    });

    connection.on('error', (error) => {
        console.error('Telnet connection error:', error);
        res.status(500).json({ error: error.message });
    });

    connection.on('close', () => {
        console.log('Telnet connection closed');
    });
};

export const getConnectionInfo = (req, res) => {
    res.status(200).json({ message: 'Connection info not implemented yet' });
};
