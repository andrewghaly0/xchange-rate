const express = require('express');
const currencyRoutes = require('./routes/currencyRoutes');
const cacheBonus = require('./middlewares/cache');
const rateLimiter = require('./middlewares/rateLimiter'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Apply rate limiting middleware
app.use(rateLimiter);

// Use the cache and routes for currency exchange
app.use('/api/exchange-rate', cacheBonus, currencyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
