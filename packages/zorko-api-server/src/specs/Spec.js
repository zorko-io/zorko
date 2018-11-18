const db = require('../db');
const ObjectId = require('mongodb').ObjectID;
const Exception = require('../base/Exception');

const { SEARCH } = require('../constants');

function formatSpec(spec) {
    return {
        id: spec._id,
        title: spec.title,
        preview: spec.preview,
        author: {
            login: spec.createdBy.login,
            avatarUrl: spec.createdBy.avatarUrl,
        },
    };
}

async function createSpec({
    spec, title, preview, createdBy, type,
}) {
    const specsCollection = db.get()
        .collection('specs');
    const now = new Date();

    // faced with mongodb version and support for '$' characters
    spec.schema = spec.$schema;
    delete spec.$schema;

    const result = await specsCollection.insert({
        spec,
        title,
        createdBy,
        preview,
        createdAt: now,
        updatedAt: now,
        type,
    });
    return result.ops[0];
}

async function removeSpec(id) {
    const specsCollection = db.get()
        .collection('specs');
    await specsCollection.deleteOne({
        _id: ObjectId(id),
    });

    return true;
}

async function getSpec(id) {
    const specsCollection = db.get()
        .collection('specs');
    const spec = await specsCollection.findOne({ _id: ObjectId(id) });
    if (!spec) {
        throw new Exception({ code: 'NOT_FOUND_ERROR', fields: { id }, message: 'Can\'t find spec by id' });
    }

    spec.$schema = spec.schema;
    delete spec.schema;

    return spec;
}

async function getSpecs(uid = null, { offset = 0, limit = SEARCH.LIMIT }) {
    const specsCollection = db.get()
        .collection('specs');
    if (!uid) {
        const specs = await specsCollection.find({})
            .skip(offset)
            .limit(limit)
            .sort({ createdAt: -1 })
            .toArray();

        return specs.map(spec => formatSpec(spec));
    }

    const spec = await specsCollection.findOne({ _id: ObjectId(uid) });

    if (!spec) {
        throw new Exception({ code: 'NOT_FOUND_ERROR', fields: { id: uid }, message: 'Can\'t find spec by id' });
    }

    return spec;
}

module.exports = {
    getSpec,
    createSpec,
    removeSpec,
    getSpecs,
};
