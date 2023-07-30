const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { urlPattern } = require('../const');
const {
  getUser,
  getUsers,
  getCurrentUser,
  patchUserProfile,
  patchUserAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getCurrentUser);
router.get(
  '/users/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().required().length(24).hex(),
    }),
  }),
  getUser
);

router.patch(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  patchUserProfile
);
router.patch(
  '/users/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().regex(urlPattern),
    }),
  }),
  patchUserAvatar
);

module.exports = router;
