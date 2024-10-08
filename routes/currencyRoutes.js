const express = require('express');
const { getRate } = require('../controller/currencyController');
const router = express.Router();

// Route for getting exchange rates
router.get('/', getRate); // Ensure this matches the URL in `server.js`

module.exports = router;
