const BaseService = require('./base.service');
const { errorHandler } = require('../helpers/error-handler.helper');

let _postRepository = null;

let _commentRepository = null;
class CommentService extends BaseService {
  constructor({ CommentRepository, PostRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _postRepository = PostRepository;
  }

  async getPostComments(postId) {
    if (!postId) {
      errorHandler(400, 'postId must be send');
    }

    const post = await _postRepository.get(postId, {
      path: 'comments',
      model: 'comments',
      select: 'comment author',
      populate: {
        path: 'author',
        model: 'users',
        select: 'username',
      },
    });

    if (!post) {
      errorHandler(404, 'Post does exists');
    }

    const { comments } = post;

    return comments;
  }

  async createComment(comment, postId, userId) {
    if (!postId) {
      errorHandler(400, 'post must sent');
    }

    const post = await _postRepository.get(postId);

    if (!post) {
      errorHandler(404, 'Post does exists');
    }

    const createdComment = await _commentRepository.create({
      ...comment,
      author: userId,
    });
    post.comments.push(createdComment);

    return await _postRepository.update(postId, { comments: post.comments });
  }
}

module.exports = CommentService;
