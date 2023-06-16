require('dotenv').config();
const express = require('express');
const ticketRoutes = require('./src/routes/ticketRoutes');
const analyticsRoutes = require('./src/routes/analyticsRoutes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/api', ticketRoutes);
app.use('/api', analyticsRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


module.exports = app;