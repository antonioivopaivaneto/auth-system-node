const express = require('express');
const app = express();

const loggerMiddleware = require('./shared/middlewares/loggerMiddleware');
const authRoutes = require('./modules/auth/routes/auth.routes');
const errorMiddleware = require('./shared/middlewares/errorMiddleware');

app.use(express.json());
app.use(loggerMiddleware);
app.use(errorMiddleware);

app.use('/api/auth', authRoutes);

module.exports = app;