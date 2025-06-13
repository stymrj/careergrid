const express = require('express');
const { signup, login, updateProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public
router.post('/signup', signup);
router.post('/login',  login);

// Protected
router.put('/update-profile', authMiddleware, updateProfile);

module.exports = router;
