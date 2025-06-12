// userRoutes.js
const express = require('express');
const auth = require('../middleware/authMiddleware');
const { getDashboard, updateProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/dashboard', auth, getDashboard);
router.put('/update-profile', auth, updateProfile);

module.exports = router;