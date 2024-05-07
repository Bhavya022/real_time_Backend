const mongoose = require('mongoose');

// Function to establish connection to MongoDB database
const connectDB = async () => {
    try {
        // MongoDB connection URL
        const uri = process.env.MONGODB_URI;

        // Options to pass to the MongoDB client
        

        // Establish connection
        await mongoose.connect(uri);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
