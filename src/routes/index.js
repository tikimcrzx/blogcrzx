const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compresion = require('compression');
const xssFilter = require('x-xss-protection');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');
require('express-async-errors');

module.exports = function ({
  AuthRoutes,
  CategoryRoutes,
  CommentRoutes,
  PostRoutes,
  RolRoutes,
  UserRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet.xssFilter())
    .use(xssFilter())
    .use(compresion());

  apiRoutes.use('/auth', AuthRoutes);
  apiRoutes.use('/category', CategoryRoutes);
  apiRoutes.use('/comment', CommentRoutes);
  apiRoutes.use('/post', PostRoutes);
  apiRoutes.use('/rol', RolRoutes);
  apiRoutes.use('/user', UserRoutes);

  router.use('/api/v1', apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
