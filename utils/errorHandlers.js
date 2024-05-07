// utils/errorHandler.js

// Function to handle errors and send appropriate responses
const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error('Error:', err);

    // Determine the status code and error message based on the type of error
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        // Handle JSON parsing errors
        statusCode = 400;
        errorMessage = 'Invalid JSON payload';
    } else if (err.name === 'ValidationError') {
        // Handle Mongoose validation errors
        statusCode = 422;
        errorMessage = err.message;
    }

    // Send the appropriate response
    res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorHandler;
