const BaseService = require('./base.service');
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUserByUsername(username, populate = null) {
    return await _userRepository.getUserByUsername(username, populate);
  }
}

module.exports = UserService;
