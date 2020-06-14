const { sign } = require('jsonwebtoken');
const { JWT_SECRECT } = require('../config');

module.exports.generateToken = function (user) {
  return sign({ user }, JWT_SECRECT, { expiresIn: '4h' });
};
