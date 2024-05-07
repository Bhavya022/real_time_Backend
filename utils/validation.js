// utils/validation.js

// Function to validate an email address
const validateEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to validate a password (e.g., minimum length)
const validatePassword = (password) => {
    // Define minimum password length
    const MIN_PASSWORD_LENGTH = 6;
    return password.length >= MIN_PASSWORD_LENGTH;
};

module.exports = {
    validateEmail,
    validatePassword
};
