const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3000;
const cityController = require('./controllers/cityController');

app.use('/api/v1', cityController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});