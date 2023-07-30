const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { postUser, login } = require('../controllers/users');
const { urlPattern } = require('../const');

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login
);

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().optional().min(2).max(30),
      avatar: Joi.string().optional().regex(urlPattern),
      about: Joi.string().optional().min(2).max(30),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  postUser
);

module.exports = router;
