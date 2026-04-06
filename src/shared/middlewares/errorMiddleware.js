const logger = require('../logger');

module.exports = (err,req, res, next) => {
   logger.error({
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method
  });
    res.status(500).json({ error: 'Internal Server Error' });
};