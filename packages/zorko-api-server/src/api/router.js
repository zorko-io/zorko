const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

const router = express.Router();

router.use(bodyParser.json({ limit: config.payloadBodyLimit }));

router.use('/api/auth', require('../auth/router'));
router.use('/api/users', require('../users/router'));
router.use('/api/specs', require('../specs/router'));

module.exports = router;
