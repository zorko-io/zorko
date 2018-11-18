const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');

const logger = require('./logger');
const config = require('./config');
const db = require('./db');
const cors = require('cors');

const app = express();

app.use(morgan('combined', { stream: { write: message => logger.info(message) } }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: config.auth.zorkoWebAppUrl,
  credentials: true,
}));
app.use(session({
  secret: config.auth.sessionSecret,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./api/router'));

db.connect({
  url: config.db.url,
  name: config.db.name
}, (err) => {
  if (err) {
    logger.error('Unable to connect to Mongo.', err);
    process.exit(1);
  } else {
    app.listen(config.port, () => {
      logger.info(`Zorko API Server started and listening on port ${config.port}`);
    });
  }
});
