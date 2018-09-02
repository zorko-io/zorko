require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    payloadBodyLimit: process.env.BODY_JSON_LIMIT,
    auth: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            secret: process.env.GITHUB_CLIENT_SECRET,
            callbackUrl: process.env.GITHUB_CLIENT_CALLBACK_URL,
        },
        sessionSecret: process.env.SESSION_SECRET,
        zorkoWebAppUrl: process.env.ZORKO_WEB_APP_URL,
        jwtsecret: process.env.JWT_SECRET,
        jwtExpireTime: process.env.JWT_EXPIRE_TIME,
    },
    db: {
        url: process.env.MONGO_ROOT_URL,
        name: process.env.MONGO_DB_NAME,
        urlParams: process.env.MONGO_URL_PARAMS,
    },
};
