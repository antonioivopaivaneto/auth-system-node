const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
    error: 'Muitas requisições, tente novamente mais tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;