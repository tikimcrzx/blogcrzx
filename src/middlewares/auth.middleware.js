const jwt = require('jsonwebtoken');
const { errorHandler } = require('../helpers/error-handler.helper');
const { JWT_SECRECT } = require('../config');

module.exports = function (req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    errorHandler(400, 'Token must be sent');
  }

  jwt.verify(token, JWT_SECRECT, function (err, decodedToken) {
    if (err) {
      errorHandler(401, 'Invalid Token');
    }

    req.user = decodedToken.user;
    next();
  });
};
