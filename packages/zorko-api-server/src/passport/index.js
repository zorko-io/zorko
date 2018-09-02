const config = require('../config');
const logger = require('../logger');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserCreate = require('../users/UserCreate');
const UserRead = require('../users/UserRead');

passport.use(new GitHubStrategy(
    {
        clientID: config.auth.github.clientId,
        clientSecret: config.auth.github.secret,
        callbackURL: config.auth.github.callbackUrl,
    },
    async (accessToken, refreshToken, profile, done) => {
        logger.log('info', `Start github user verification ${profile.id}`);
        const {
            id, avatar_url, login, email, name,
        } = profile._json;
        try {
            const command = new UserCreate();
            const user = await command.run({
                profile: {
                    provider: 'github',
                    githubId: id,
                    avatarUrl: avatar_url,
                    login,
                    email,
                    firstName: name,
                },
            });
            return done(null, user);
        } catch (error) {
            if (error.toHash) {
                const data = error.toHash();
                logger.log('error', `Problems github verification ${profile.id}, code: ${data.code}, fields: ${JSON.stringify(data.fields)}`);
            } else {
                logger.log('error', `Problems github verification ${profile.id}, message: ${error.message}`);
            }
            return done(error, null);
        }
    },
));

// TODO: enable local auth for full test cycles in development/test
// passport.use(new LocalStrategy(
//     {
//         usernameField: 'email',
//         passwordField: 'password',
//     },
//     async (username, password, done) => {
//         const usersCollection = db.get().collection('users');
//         const user = await usersCollection.findOne({ email: username }, { password: false });
//
//         if (!user) { return done(null, false); }
//
//         const correctPassword = bcrypt.compareSync(password, user.password);
//
//         if (!correctPassword) { return done(null, false); }
//
//         delete user.password;
//
//         return done(null, user);
//     },
// ));

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.auth.jwtsecret,
    },
    async (jwtPayload, done) => {
        try {
            const command = new UserRead();
            const user = await command.run({ login: jwtPayload.login });
            return done(null, user);
        } catch (error) {
            logger.error(`Error during jwt verification on user id=${jwtPayload.login}`);
            return done(error, null);
        }
    },
));

passport.serializeUser((user, done) => {
    logger.log('info', `Serialize user by login ${user.login}`);
    done(null, { login: user.login });
});

passport.deserializeUser(async (obj, done) => {
    logger.log('info', `Deserialize user by login ${obj.login}`);
    try {
        const command = new UserRead();
        const user = await command.run({ login: obj.login });
        done(null, user);
    } catch (e) {
        logger.error(`Can't deserialize user by ${obj.login}`);
        done(e, null);
    }
});

module.exports = passport;
