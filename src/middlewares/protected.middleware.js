const { errorHandler } = require('../helpers/error-handler.helper');

module.exports = function (...roles) {
  return (req, res, next) => {
    let counter = 0;
    const _roles = req.user.roles;
    for (let index = 0; index < _roles.length; index++) {
      if (roles.includes(_roles[index].rol)) {
        return next();
      }
    }
    return next(
      errorHandler(403, 'You do not have permission to perform this action'),
    );
  };
};
