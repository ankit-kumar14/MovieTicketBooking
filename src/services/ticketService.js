const db = require('../utils/db');
console.log("In service")
console.log(db.query)
async function createTicket(ticket) {
  const query = `
    INSERT INTO tickets (creation_date, customer_name, movie_title, movie_time, ticket_price, imdb_ratings)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;
  const values = [
    ticket.creation_date,
    ticket.customer_name,
    ticket.movie_title,
    ticket.movie_time,
    ticket.ticket_price,
    ticket.imdb_ratings
  ];

  const { rows } = await db.query(query, values);
  return rows[0];
}

async function getAllTickets() {
  const query = `
    SELECT * FROM tickets
  `;

  const { rows } = await db.query(query);
  return rows;
}

async function getTicketById(ticketId) {
  const query = `
    SELECT * FROM tickets WHERE id = $1
  `;
  const values = [ticketId];

  const { rows } = await db.query(query, values);
  return rows[0];
}

async function updateTicket(ticketId, ticketUpdates) {
  const query = `
    UPDATE tickets
    SET creation_date = $1, customer_name = $2, movie_title = $3, movie_time = $4, ticket_price = $5
    WHERE id = $6
    RETURNING *
  `;
  const values = [
    ticketUpdates.creation_date,
    ticketUpdates.customer_name,
    ticketUpdates.movie_title,
    ticketUpdates.movie_time,
    ticketUpdates.ticket_price,
    ticketId,
  ];

  const { rows } = await db.query(query, values);
  return rows[0];
}

async function deleteTicket(ticketId) {
  const query = `
    DELETE FROM tickets WHERE id = $1
    RETURNING *
  `;
  const values = [ticketId];

  const { rows } = await db.query(query, values);
  return rows[0];
}

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
