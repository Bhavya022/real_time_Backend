// middleware/authenticate.js

const jwt = require('jsonwebtoken');
const { verifyAccessToken } = require('../services/AuthenticationService');

// Middleware function to authenticate requests using JWT token
exports.authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authentication token missing' });
    }

    try {
        const decoded = await verifyAccessToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Error verifying access token:', err);
        return res.status(403).json({ error: 'Invalid access token' });
    }
};

// Middleware function to handle errors
exports.handleError = (err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(500).json({ error: 'Internal server error' });
};
