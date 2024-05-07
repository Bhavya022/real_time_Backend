const WebSocket = require('ws');

// Middleware for WebSocket connections
const webSocketMiddleware = (server) => {
    const wsServer = new WebSocket.Server({ server });

    // WebSocket connection event
    wsServer.on('connection', (ws) => {
        // Handle new WebSocket connection
        console.log('New WebSocket connection');

        // WebSocket message event
        ws.on('message', (message) => {
            // Handle received message
            console.log('Received message:', message);

            // Process the message (e.g., broadcast to other clients)
        });

        // WebSocket connection close event
        ws.on('close', () => {
            // Handle WebSocket connection closing
            console.log('WebSocket connection closed');
        });
    });

    // Return the WebSocket server instance
    return wsServer;
};

module.exports = webSocketMiddleware;
