const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Routes for room-related operations
router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.put('/:id', roomController.updateRoomById);
router.delete('/:id', roomController.deleteRoomById);

module.exports = router;
