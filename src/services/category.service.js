const BaseService = require('./base.service');

class CategoryService extends BaseService {
  constructor({ CategoryRepository }) {
    super(CategoryRepository);
  }
}

module.exports = CategoryService;
