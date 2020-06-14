const BaseService = require('./base.service');

class RolService extends BaseService {
  constructor({ RolRepository }) {
    super(RolRepository);
  }
}

module.exports = RolService;
