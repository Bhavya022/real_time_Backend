const WebSocket = require('ws');
const VoiceData = require('../models/VoiceData');

// WebSocket server instance
let wsServer;

// Function to initialize WebSocket server
exports.initializeWebSocketServer = (server) => {
    wsServer = new WebSocket.Server({ server });

    wsServer.on('connection', (ws) => {
        // Handle new WebSocket connection
        console.log('New WebSocket connection');

        // Handle WebSocket connection closing
        ws.on('close', () => {
            // Handle WebSocket connection closing
            console.log('WebSocket connection closed');
        });
    });
};

// Function to transmit voice data to all connected clients
const transmitVoiceData = (data) => {
    // Check if WebSocket server is initialized
    if (wsServer) {
        // Broadcast voice data to all connected clients
        wsServer.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    }
};

// Controller for voice-related operations

// Save voice data
// exports.saveVoiceData = async (req, res) => {
//     try {
//         const { userId, roomId, data } = req.body;
//         const voiceData = await VoiceData.create({ userId, roomId, data });
//         // Broadcast voice data to all connected clients via WebSocket
//         transmitVoiceData(JSON.stringify(voiceData));
//         res.status(201).json(voiceData);
//     } catch (err) {
//         console.error('Error saving voice data:', err);
//         res.status(500).json({ error: 'Server error' });
//     }
// };
// Modify the saveVoiceData controller in voiceController.js to include the sender field
exports.saveVoiceData = async (req, res) => {
    try {
        const { userId, roomId, data, sender } = req.body; // Ensure sender is included in the request body
        const voiceData = await VoiceData.create({ userId, roomId, data, sender }); // Include sender when creating voice data
        res.status(201).json(voiceData);
    } catch (err) {
        console.error('Error saving voice data:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get voice data by room ID
exports.getVoiceDataByRoomId = async (req, res) => {
    try {
        const { roomId } = req.params;
        const voiceData = await VoiceData.find({ roomId });
        res.status(200).json(voiceData);
    } catch (err) {
        console.error('Error getting voice data by room ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get voice data by user ID
exports.getVoiceDataByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const voiceData = await VoiceData.find({ userId });
        res.status(200).json(voiceData);
    } catch (err) {
        console.error('Error getting voice data by user ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete voice data by ID
exports.deleteVoiceDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVoiceData = await VoiceData.findByIdAndDelete(id);
        if (!deletedVoiceData) {
            return res.status(404).json({ error: 'Voice data not found' });
        }
        res.status(200).json({ message: 'Voice data deleted successfully' });
    } catch (err) {
        console.error('Error deleting voice data by ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};
