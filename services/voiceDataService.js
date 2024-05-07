const VoiceData = require('../models/VoiceData');

const saveVoiceData = async (userId, roomId, data) => {
    try {
        const voiceData = await VoiceData.create({ userId, roomId, data });
        return voiceData;
    } catch (err) {
        console.error('Error saving voice data:', err);
        throw new Error('Server error');
    }
};

const getVoiceDataByRoomId = async (roomId) => {
    try {
        const voiceData = await VoiceData.find({ roomId });
        return voiceData;
    } catch (err) {
        console.error('Error getting voice data by room ID:', err);
        throw new Error('Server error');
    }
};

// Implement other voice data services (getVoiceDataByUserId, deleteVoiceDataById) similarly

module.exports = { saveVoiceData, getVoiceDataByRoomId };
