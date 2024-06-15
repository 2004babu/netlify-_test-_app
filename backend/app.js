const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

// Use CORS middleware
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
    console.log(req);
    res.status(200).json({
        message:`${process.env.PORT} : ${req.protocol}:  ${req.get('host') }:/`
    });
});

process.on('uncaughtException', (err) => {
    console.log(err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
