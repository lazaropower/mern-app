const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/reminders', require('./routes/reminders'));

module.exports = app;