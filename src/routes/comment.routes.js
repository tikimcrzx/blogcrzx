const { Router } = require('express');
const { AuthMiddleware, ProtectedMiddleware } = require('../middlewares');

module.exports = function ({ CommentController }) {
  const router = Router();

  router.use(AuthMiddleware);
  router.use(ProtectedMiddleware('author'));

  router.get('/:postId/unique', CommentController.getPostComments);
  router.get('/:postId', CommentController.get);
  router.post('/:postId', CommentController.createComment);
  router.patch('/:commentId/', CommentController.update);
  router.delete('/:commentId', CommentController.delete);

  return router;
};
