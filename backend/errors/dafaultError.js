const { codesError } = require('../error');

class DefaultError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = codesError.DEFAULT;
  }
}

module.exports = DefaultError;
