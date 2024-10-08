const { getExchangeRate } = require('../services/currencyService');

async function getRate(req, res) {
    const { from, to } = req.query;

    if (!from || !to) {
        return res.status(400).json({ message: 'Please provide both from and to currency parameters.' });
    }

    try {
        const rate = await getExchangeRate(from, to);
        res.status(200).json({ rate });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getRate };
