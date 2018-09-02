const logger = require('../logger');
const _ = require('lodash');

const makeRouterHandler = (Command, mapToParams, mapToRes) => async (req, res) => {
    try {
        const { session: { context } } = req;
        const command = new Command({ context });
        const result = await command.run(mapToParams(req));
        if (!mapToRes) {
            res.json(result);
        } else {
            mapToRes(result, res);
        }
    } catch (err) {
        if (err.code === 'NOT_FOUND_ERROR') {
            const data = err.toHash();
            logger.log('error', `code: ${data.code}\\n fields: ${data.fields}, message:${err.message}`);
            res.status(404)
                .json(data);
        } else if (err.code === 'FORMAT_ERROR') {
            const data = err.toHash();
            logger.log('error', ` code: ${data.code}\\n fields: ${data.fields}`);
            res.status(400)
                .json(data);
        } else if (err.code === 'ENTITY_ALREADY_EXIST') {
            const data = err.toHash();
            logger.log('error', `code: ${data.code}\\n fields: ${data.fields}, message:${err.message}`);
            res.status(422)
                .json(data);
        } else if (err.code === 'PERMISSIONS_ERROR') {
            const data = err.toHash();
            logger.log('error', `code: ${data.code}\\n fields: ${data.fields}, message:${err.message}`);
            res.status(403)
                .json({
                    code: data.code,
                    message: err.message,
                });
        } else {
            const message = _.isObject(err) ? err.message : err;
            const stack = err.stack;
            logger.log('error', ` message: ${message} stack: ${stack}`);
            // TODO: don't return stack trace for production
            res.status(500)
                .json({
                    message,
                    stack,
                });
        }
    }
};

module.exports = makeRouterHandler;
