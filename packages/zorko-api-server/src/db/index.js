const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

const state = {
    db: null,
};

module.exports.connect = (url, done) => {
    if (state.db) return done();

    MongoClient.connect(url, (err, client) => {
        if (err) return done(err);
        console.log(`set zorko db connection in url: ${url}`);
        state.db = client.db(config.db.name);
        done();
    });
};

module.exports.get = () => {
    return state.db;
};

module.exports.close = (done) => {
    if (state.db) {
        state.db.close((err) => {
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
};
