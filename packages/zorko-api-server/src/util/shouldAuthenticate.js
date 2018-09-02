const passport = require('passport');

// TODO: should return json format for 401
const shouldAuthenticate = () => passport.authenticate('jwt', { session: false });

module.exports = shouldAuthenticate;

