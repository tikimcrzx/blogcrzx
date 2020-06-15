const { Router } = require('express');

module.exports = function ({ CategoryController }) {
  const router = Router();

  router
    .route('/')
    .get(CategoryController.getAll)
    .post(CategoryController.create);

  router
    .route('/:categoryId')
    .get(CategoryController.get)
    .patch(CategoryController.update)
    .delete(CategoryController.delete);

  return router;
};
