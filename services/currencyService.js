const axios = require('axios');

// Hardcoded values for API URL and API key
const EXTERNAL_API_URL = 'https://v6.exchangerate-api.com/v6'; // Base URL
const EXTERNAL_API_KEY = '1a50b20cc20e5b2a1b293029'; // Your API key

async function getExchangeRate(fromCurrency, toCurrency) {
    try {
        // Make a request to the external currency API
        const response = await axios.get(`${EXTERNAL_API_URL}/${EXTERNAL_API_KEY}/latest/${fromCurrency}`);
        
        // Extract the exchange rate for the target currency
        const rate = response.data.conversion_rates[toCurrency];

        if (!rate) {
            throw new Error(`Currency ${toCurrency} not found.`);
        }
        return rate;
    } catch (error) {
        throw new Error('Failed to fetch exchange rates: ' + error.message);
    }
}

module.exports = { getExchangeRate };
