const BaseService = require('./base.service');

class PostService extends BaseService {
  constructor({ PostRepository }) {
    super(PostRepository);
  }
}

module.exports = PostService;
