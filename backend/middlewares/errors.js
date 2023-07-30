const { codesError } = require('../error');

const errors = (err, req, res, next) => {
  const { statusCode = codesError.DEFAULT, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });

  next();
};

module.exports = errors;
