let _categoryService = null;

class CategoryController {
  constructor({ CategoryService }) {
    _categoryService = CategoryService;
  }

  async create(req, res) {
    const { body } = req;
    const createdCategory = await _categoryService.create(body);
    return res.status(201).send(createdCategory);
  }

  async get(req, res) {
    const { categoryId } = req.params;
    const category = await _categoryService.get(categoryId);
    return res.send(category);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const categories = await _categoryService.getAll(pageSize, pageNum);
    return res.send(categories);
  }

  async update(req, res) {
    const { body } = req;
    const { categoryId } = req.params;
    const updatedCategory = await _categoryService.update(categoryId, body);
    return res.send(updatedCategory);
  }

  async delete(req, res) {
    const { categoryId } = req.params;
    const deletedCategory = await _categoryService.delete(categoryId);
    return res.send(deletedCategory);
  }
}

module.exports = CategoryController;
