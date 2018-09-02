const express = require('express');
const makeRouterHandler = require('../util/makeRouterHandler');
const shouldAuthenticate = require('../util/shouldAuthenticate');
const UserListRead = require('./UserListRead');
const UserRead = require('./UserRead');
const UserCreate = require('./UserCreate');
const UserRemove = require('./UserRemove');

const router = express.Router();

router.get('/', makeRouterHandler(
    UserListRead,
    req => ({ offset: req.query.offset, limit: req.query.limit }),
));

router.get('/:login', makeRouterHandler(
    UserRead,
    req => ({ login: req.params.login }),
));

router.post('/', makeRouterHandler(
    UserCreate,
    req => ({
        profile: {
            provider: 'local',
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,
        },
    }),
));

router.delete('/:login', shouldAuthenticate(), makeRouterHandler(
    UserRemove,
    req => ({
        login: req.params.login,
        admin: req.user.admin ? req.user.admin : false,
    }),
));

module.exports = router;
