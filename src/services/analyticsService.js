const db = require('../utils/db');

async function getProfitByMovie(startDate, endDate) {
  const query = `
    SELECT
      to_char(date_trunc('month', creation_date), 'Month') AS month,
      SUM(ticket_price) AS netProfit
    FROM tickets
    WHERE creation_date >= $1 AND creation_date <= $2
    GROUP BY month
    ORDER BY month
  `;
  const values = [startDate, endDate];

  const { rows } = await db.query(query, values);
  return rows;
}

async function getVisitsByMovie(startDate, endDate) {
  const query = `
    SELECT
      to_char(date_trunc('month', creation_date), 'Month') AS month,
      COUNT(*) AS totalVisits
    FROM tickets
    WHERE creation_date >= $1 AND creation_date <= $2
    GROUP BY month
    ORDER BY month
  `;
  const values = [startDate, endDate];

  const { rows } = await db.query(query, values);
  return rows;
}

module.exports = {
  getProfitByMovie,
  getVisitsByMovie,
};
