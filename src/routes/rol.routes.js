const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');

module.exports = function ({ RolController }) {
  const router = Router();

  // router.use(AuthMiddleware);

  router.route('/').post(RolController.create).get(RolController.getAll);

  router
    .route('/:rolId')
    .get(RolController.get)
    .patch(RolController.update)
    .delete(RolController.delete);

  return router;
};
