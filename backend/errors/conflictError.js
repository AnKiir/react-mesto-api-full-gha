const { codesError } = require('../error');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = codesError.CONFLICT;
  }
}

module.exports = ConflictError;
