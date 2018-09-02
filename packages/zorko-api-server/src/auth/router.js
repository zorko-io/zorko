const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const passport = require('../passport');
const logger = require('../logger');

const router = express.Router();

async function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        logger.log('info', 'User authenticated');
        return next();
    }
    logger.log('info', 'User not authenticated');
    res.status(403).send({ error: { code: 'NOT_AUTHORIZED_SESSION' } });
}

router.get('/profile', ensureAuthenticated, (req, res) => {
    const token = jwt.sign(req.user, config.auth.jwtsecret, { expiresIn: config.auth.jwtExpireTime });
    return res.json({ user: req.user, token });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(config.auth.zorkoWebAppUrl);
});

// TODO: recover local auth for development/tests proposes
// router.post('/local/sign-in', passport.authenticate('local'));

router.get('/github/sign-in', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', {
    failureRedirect: config.auth.zorkoWebAppUrl,
}), (req, res) => {
    logger.log('info', `Successfully return from github auth with sessionID=${req.sessionID}`);
    res.redirect(config.auth.zorkoWebAppUrl);
});

module.exports = router;
