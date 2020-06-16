let _postService = null;
const populate = {
  path: 'categories',
  model: 'categories',
  select: 'category',
};

class PostController {
  constructor({ PostService }) {
    _postService = PostService;
  }

  async create(req, res) {
    const { body } = req;
    const createdPost = await _postService.create(body);
    return res.status(201).send(createdPost);
  }

  async get(req, res) {
    const { postId } = req.params;
    const post = await _postService.get(postId, populate);
    return res.send(post);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const posts = await _postService.getAll(pageSize, pageNum, populate);
    return res.send(posts);
  }

  async update(req, res) {
    const { body } = req;
    const { postId } = req.params;
    const updatedPost = await _postService.update(postId, body);
    return res.send(updatedPost);
  }

  async delete(req, res) {
    const { postId } = req.params;
    const deletedPost = await _postService.delete(postId);
    return res.send(deletedPost);
  }
}

module.exports = PostController;
