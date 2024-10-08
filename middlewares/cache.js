const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

function cacheBonus(req, res, next) {
    const { from, to } = req.query;
    const key = `${from}_${to}`;

    // Check if the rate is already in the cache
    const cachedRate = cache.get(key);
    if (cachedRate) {
        return res.status(200).json({ rate: cachedRate });
    }

    // Modify the response object to cache the data
    res.sendResponse = res.json;
    res.json = (data) => {
        cache.set(key, data.rate);
        res.sendResponse(data);
    };

    next();
}

module.exports = cacheBonus;
