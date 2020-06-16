const { generateToken } = require('../helpers/jwt.helper');
const { errorHandler } = require('../helpers/error-handler.helper');
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;
    const userExist = await _userService.getUserByUsername(username);

    if (userExist) {
      errorHandler(401, 'User Already exist');
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;
    const userExist = await _userService.getUserByUsername(username, {
      path: 'roles',
      models: 'roles',
      select: 'rol',
    });

    if (!userExist) {
      errorHandler(404, 'User does not exist');
    }

    const validatedPassword = userExist.comparePassword(password);

    if (!validatedPassword) {
      errorHandler(400, 'Invalid Password');
    }

    const userToEncode = {
      id: userExist._id,
      username: userExist.username,
      roles: userExist.roles,
    };

    const token = generateToken(userToEncode);

    return { token, user: userExist };
  }
}

module.exports = AuthService;
