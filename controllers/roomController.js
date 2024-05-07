const Room = require('../models/Room');

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        const { name } = req.body;
        const newRoom = await Room.create({ name });
        res.status(201).json(newRoom);
    } catch (err) {
        console.error('Error creating room:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        console.error('Error getting rooms:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get room by ID
exports.getRoomById = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (err) {
        console.error('Error getting room by ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update room by ID
exports.updateRoomById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRoom) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(updatedRoom);
    } catch (err) {
        console.error('Error updating room by ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete room by ID
exports.deleteRoomById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRoom = await Room.findByIdAndDelete(id);
        if (!deletedRoom) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (err) {
        console.error('Error deleting room by ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};
