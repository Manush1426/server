const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/profile', auth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;