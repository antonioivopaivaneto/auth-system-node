const router = require('express').Router();
const rateLimit = require('express-rate-limit');
const AuthController = require('../controllers/AuthController');

const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 5, // só 5 tentativas
  message: {
    error: 'Muitas tentativas de login, tente novamente em 1 minuto.'
  }
});

router.post('/login', loginLimiter, AuthController.login);

router.get('/ping', (req, res) => {
  res.json({ message: 'Auth module funcionando 🚀' });
});

module.exports = router;