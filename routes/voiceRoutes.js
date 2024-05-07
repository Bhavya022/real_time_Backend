const express = require('express');
const router = express.Router();
const voiceController = require('../controllers/voiceController');

// Routes for voice-related operations
router.post('/', voiceController.saveVoiceData);
router.get('/room/:roomId', voiceController.getVoiceDataByRoomId);
router.get('/user/:userId', voiceController.getVoiceDataByUserId);
router.delete('/:id', voiceController.deleteVoiceDataById);

module.exports = router;
