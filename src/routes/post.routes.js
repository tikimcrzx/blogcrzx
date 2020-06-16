const { Router } = require('express');

module.exports = function ({ PostController }) {
  const router = Router();

  router.route('/').get(PostController.getAll).post(PostController.create);

  router
    .route('/:postId')
    .get(PostController.get)
    .patch(PostController.update)
    .delete(PostController.delete);

  return router;
};
