const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Fetch current user
router.get('/me', authMiddleware, getProfile);

// Update links & resume
router.post('/me', authMiddleware, updateProfile);

module.exports = router;
