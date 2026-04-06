const router = require('express').Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'Auth module funcionando 🚀' });
});

module.exports = router;