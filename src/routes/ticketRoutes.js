const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authenticate = require('../middlewares/authMiddleware');

router.post('/tickets', authenticate, ticketController.createTicket);

router.get('/tickets', authenticate, ticketController.getAllTickets);

router.get('/tickets/:id', authenticate, ticketController.getTicketById);

router.put('/tickets/:id', authenticate, ticketController.updateTicket);

router.delete('/tickets/:id', authenticate, ticketController.deleteTicket);

module.exports = router;
