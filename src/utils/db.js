const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MovieBooking',
  password: 'ankit7856',
  port: 5432,
});
console.log("In Db.js")

module.exports = {
  query: (text, params) => pool.query(text, params),
};
