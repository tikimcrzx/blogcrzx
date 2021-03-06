const { errorHandler } = require('../helpers/error-handler.helper');

class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id, populate = null) {
    if (!id) {
      errorHandler(404, 'id must be send');
    }

    const currentEntity = await this.repository.get(id, populate);

    if (!currentEntity) {
      errorHandler(404, 'Entitity does not found');
    }

    return currentEntity;
  }

  async getAll(pageSize, pageNum, populate = null) {
    return await this.repository.getAll(pageSize, pageNum, populate);
  }

  async create(entity) {
    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      errorHandler(400, 'id must be send');
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      errorHandler(400, 'id must be send');
    }

    return await this.repository.delete(id);
  }
}

module.exports = BaseService;
