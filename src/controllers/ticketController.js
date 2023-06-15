const ticketService = require('../services/ticketService');

async function createTicket(req, res) {
  try {
    const ticket = req.body;
    console.log(ticket)
    const newTicket = await ticketService.createTicket(ticket);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAllTickets(req, res) {
  try {
    const tickets = await ticketService.getAllTickets();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getTicketById(req, res) {
  try {
    const ticketId = req.params.id;
    const ticket = await ticketService.getTicketById(ticketId);
    if (!ticket) {
      res.status(404).json({ error: 'Ticket not found' });
    } else {
      res.json(ticket);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateTicket(req, res) {
  try {
    const ticketId = req.params.id;
    const ticketUpdates = req.body;
    const updatedTicket = await ticketService.updateTicket(ticketId, ticketUpdates);
    if (!updatedTicket) {
      res.status(404).json({ error: 'Ticket not found' });
    } else {
      res.json(updatedTicket);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteTicket(req, res) {
  try {
    const ticketId = req.params.id;
    const deletedTicket = await ticketService.deleteTicket(ticketId);
    if (!deletedTicket) {
      res.status(404).json({ error: 'Ticket not found' });
    } else {
      res.json({ message: 'Ticket deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
