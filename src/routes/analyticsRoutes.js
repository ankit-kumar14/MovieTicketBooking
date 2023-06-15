const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const authenticate = require('../middlewares/authMiddleware');

// router.get('/analytics/profit', authenticate, analyticsController.getProfitByMovie);

// router.get('/analytics/visits', authenticate, analyticsController.getVisitsByMovie);

router.get('/analytics/profit', analyticsController.getProfitByMovie);

router.get('/analytics/visits', analyticsController.getVisitsByMovie);

module.exports = router;
