const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compresion = require('compression');
const xssFilter = require('x-xss-protection');
const {
  ErrorMiddleware,
  NotFoundMiddleware,
} = require('../middlewares');
require('express-async-errors');

module.exports = function ({ AuthRoutes, UserRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet.xssFilter())
    .use(xssFilter())
    .use(compresion());

  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/auth', AuthRoutes);

  router.use('/api/v1', apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
