module.exports.errorHandler = function (status, message) {
  const error = new Error();
  error.message = message;
  error.status = status;
  throw error.message;
};
