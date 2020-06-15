const BaseRepository = require('./base.repository');

class CategoryRepository extends BaseRepository {
  constructor({ Category }) {
    super(Category);
  }
}

module.exports = CategoryRepository;
