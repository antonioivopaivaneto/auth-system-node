const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');

exports.generateJWT = (payload) => {
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}