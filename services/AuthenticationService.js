const jwt = require('jsonwebtoken');

// Service for user authentication

// Function to generate an access token for a user
exports.generateAccessToken = (user) => {
    // Generate a JWT token with user ID as payload
    return jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// Function to verify and decode an access token
exports.verifyAccessToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};
