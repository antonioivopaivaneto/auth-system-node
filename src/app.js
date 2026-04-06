const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./modules/auth/routes/auth.routes');

app.use('/api/auth', authRoutes);

module.exports = app;