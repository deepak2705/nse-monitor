const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const headers = {
    'User-Agent': 'Mozilla/5.0',
    'Accept': '*/*',
    'Referer': 'https://www.nseindia.com/',
    'Host': 'www.nseindia.com'
};

app.get('/stocks', async (req, res) => {
    try {
        const response = await axios.get('https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050', { headers });
        res.json(response.data.data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch stock list' });
    }
});

app.get('/quote/:symbol', async (req, res) => {
    try {
        const response = await axios.get(`https://www.nseindia.com/api/quote-equity?symbol=${req.params.symbol}`, { headers });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quote' });
    }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
