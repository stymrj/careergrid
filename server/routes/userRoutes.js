const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/me', authMiddleware, getProfile);
router.post('/me', authMiddleware, updateProfile);

module.exports = router;
