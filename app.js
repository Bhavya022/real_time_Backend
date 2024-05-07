const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const voiceRoutes = require('./routes/voiceRoutes');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Real-Time Communication App!');
});
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/voice', voiceRoutes);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
