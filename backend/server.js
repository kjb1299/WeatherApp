const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');

const app = express();
dotenv.config();
const apiKey = process.env.API_KEY;

const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

