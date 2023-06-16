const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const authenticate = require('../middlewares/authMiddleware');

router.get('/analytics/profit', authenticate, analyticsController.getProfitByMovie);

router.get('/analytics/visits', authenticate, analyticsController.getVisitsByMovie);

module.exports = router;
