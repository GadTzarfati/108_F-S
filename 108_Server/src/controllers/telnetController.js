import * as Telnet from 'telnet-client';

export const connect = async (req, res) => {
    const { host, port, username, password, command } = req.body;

    if (!host || !port || !username || !password || !command) {
        return res.status(400).json({ error: 'All fields are required (host, port, username, password, command)' });
    }

    const connection = new Telnet();

    const params = {
        host,
        port: port || 23,
        timeout: 1500,
        loginPrompt: /login[: ]*$/i,
        passwordPrompt: /Password[: ]*$/i,
        username,
        password
    };

    try {
        console.log('Attempting to connect to Telnet server with params:', params);

        await connection.connect(params);

        console.log('Connection established, executing command:', command);
        const output = await connection.exec(command);

        console.log('Command output:', output);
        res.status(200).json({ output });
    } catch (error) {
        console.error('Error during Telnet connection or command execution:', error);
        res.status(500).json({ error: error.message });
    } finally {
        connection.end();
    }
};
