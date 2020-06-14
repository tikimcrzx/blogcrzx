const { Router } = require('express');

module.exports = function ({ RolController }) {
  const router = Router();

  router
    .route('/')
    .post(RolController.create)
    .get(RolController.getAll);

  router
    .route('/:rolId')
    .get(RolController.get)
    .patch(RolController.update)
    .delete(RolController.delete);

  return router;
};
