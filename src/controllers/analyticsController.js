const analyticsService = require('../services/analyticsService');

async function getProfitByMovie(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const profitData = await analyticsService.getProfitByMovie(startDate, endDate);
    res.json(profitData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getVisitsByMovie(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const visitsData = await analyticsService.getVisitsByMovie(startDate, endDate);
    res.json(visitsData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getProfitByMovie,
  getVisitsByMovie,
};
