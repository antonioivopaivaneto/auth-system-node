const logger = require('../logger');

module.exports = (req, res, next) => {
    logger.info({
        message:'Request received',
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString(),
        ip: req.ip

    });
    next();
};      
