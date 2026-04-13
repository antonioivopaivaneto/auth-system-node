const express = require('express');
const cors = require('cors');

const app = express();

const loggerMiddleware = require('./shared/middlewares/loggerMiddleware');
const authRoutes = require('./modules/auth/routes/auth.routes');
const errorMiddleware = require('./shared/middlewares/errorMiddleware');
const rateLimitMiddleware = require('./shared/middlewares/rateLimitMiddleware');

app.use(cors({
  origin: ['*'],
}));
app.use(express.json());
app.use(rateLimitMiddleware);
app.use(loggerMiddleware);

app.use('/api/auth', authRoutes);

app.use(errorMiddleware);


module.exports = app;