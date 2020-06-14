const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');

module.exports = function ({ UserController }) {
  const router = Router();

  // router.use(AuthMiddleware);

  router.route('/').get(UserController.getAll);

  router
    .route('/:userId')
    .get(UserController.get)
    .patch(UserController.update)
    .delete(UserController.delete);

  return router;
};
