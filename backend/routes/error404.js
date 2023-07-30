const router = require('express').Router();
const NotFoundDataError = require('../errors/notFoundDataError');

router.use('*', (req, res, next) => {
  next(new NotFoundDataError('Передан некорректный путь'));
});

module.exports = router;
