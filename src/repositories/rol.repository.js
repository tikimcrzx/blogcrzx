const BaseRepository = require('./base.repository');

class RolRepository extends BaseRepository {
  constructor({ Rol }) {
    super(Rol);
  }
}

module.exports = RolRepository;
