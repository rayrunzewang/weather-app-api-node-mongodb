const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3001;
const cityController = require('./controllers/cityController');

app.use(cors());

app.use(express.json());
app.use('/api/v1', cityController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});