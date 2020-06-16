const jwt = require('jsonwebtoken');
const { errorHandler } = require('../helpers/error-handler.helper');
const { JWT_SECRECT } = require('../config');

module.exports = function (req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    errorHandler(400, 'Token must be sent');
  }

  jwt.verify(token, JWT_SECRECT, function (err, decodedToken) {
    if (err) {
      errorHandler(400, 'Invalid Token');
    }

    req.user = decodedToken.user;
    next();
  });
};
