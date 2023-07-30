const { codesError } = require('../error');

class IncorrectError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = codesError.INCORRECT_DATA;
  }
}

module.exports = IncorrectError;
