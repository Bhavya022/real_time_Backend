const WebSocket = require('ws');

let wsServer;

// Function to initialize WebSocket server
const initializeWebSocketServer = (server) => {
    wsServer = new WebSocket.Server({ server });

    wsServer.on('connection', (ws) => {
        console.log('New WebSocket connection');

        ws.on('message', (message) => {
            console.log('Received message:', message);

            // Broadcast message to all clients except the sender
            wsServer.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });

        ws.on('close', () => {
            console.log('WebSocket connection closed');
        });
    });
};

// Function to transmit data to all connected clients
const transmitData = (data) => {
    if (wsServer) {
        wsServer.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    }
};

module.exports = { initializeWebSocketServer, transmitData };
