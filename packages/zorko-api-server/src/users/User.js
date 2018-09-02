const error = require('http-errors');
const bcrypt = require('bcrypt');
const ObjectId = require('mongodb').ObjectID;
const Exception = require('../base/Exception');

const db = require('../db');
const { DATES } = require('../constants');

async function findUserByEmailOrUid(email, uid) {
    const usersCollection = db.get()
        .collection('users');
    let user;
    if (email) {
        user = await usersCollection.findOne({ email });
    } else if (uid) {
        user = await usersCollection.findOne({ _id: ObjectId(uid) });
    }
    return user;
}

async function findById(uid) {
    const usersCollection = db.get()
        .collection('users');
    const user = await usersCollection.findOne({ _id: ObjectId(uid) });
    return user;
}

async function findByLogin(login) {
    const usersCollection = db.get()
        .collection('users');
    const user = await usersCollection.findOne({ login });
    return user;
}

async function findByGithubId(githubId) {
    const usersCollection = db.get()
        .collection('users');
    const user = await usersCollection.findOne({ githubId });
    return user;
}

async function userCreate(options) {
    const {
        email, login, firstName, lastName, avatarUrl, githubId,
    } = options;

    const usersCollection = db.get()
        .collection('users');

    const user = {
        email,
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        removedAt: new Date(DATES.REMOVED_AT),
        login,
        firstName,
        lastName,
        avatarUrl,
        githubId,
        specs: [],
    };

    const insert = await usersCollection.insert({ ...user });

    if (insert.result && insert.result.ok === 1 && insert.result.n === 1) {
        const insertedUser = insert.ops[0];
        insertedUser.id = insertedUser._id;
        delete insertedUser._id;

        return { ...insertedUser };
    }
    throw error(400, 'User not created');
}

async function findOrCreate(options) {
    const { githubId } = options;
    let user;

    if (githubId) {
        user = await findByGithubId(githubId);
        if (!user) {
            user = await userCreate(options);
        }
    }
    return user;
}

async function addSpec(user, spec) {
    const usersCollection = db.get()
        .collection('users');
    const nextUser = await usersCollection.updateOne(
        { login: user.login },
        { $addToSet: { specs: spec._id } },
    );
    return nextUser;
}

async function removeSpec(user, spec) {
    const updatedUserSpecs = user.specs.filter(userSpecId => ObjectId(userSpecId)
        .toString() !== ObjectId(spec._id)
        .toString());
    const usersCollection = db.get()
        .collection('users');
    const nextUser = await usersCollection.updateOne(
        { login: user.login },
        { $set: { specs: updatedUserSpecs } },
    );
    return nextUser;
}

async function getUser(login) {
    const usersCollection = db.get()
        .collection('users');
    const user = await usersCollection.findOne({
        $and: [
            { login },
            {
                $where: `(new Date(this.removedAt)).getTime() === ${(new Date(DATES.REMOVED_AT)).getTime()}`,
            },
        ],
    });

    if (!user) {
        throw new Exception({
            code: 'NOT_FOUND_ERROR',
            fields: {
                login,
            },
            message: 'Can\'t find user',
        });
    }

    return user;
}

async function getUsers({ offset = 0, limit = 0 }) {
    const usersCollection = db.get()
        .collection('users');
    const users = await usersCollection.find({
        $where: `(new Date(this.removedAt)).getTime() === ${(new Date(DATES.REMOVED_AT)).getTime()}`,
    })
        .skip(offset)
        .limit(limit)
        .toArray();

    return users;
}

async function createUser(user) {
    const usersCollection = db.get()
        .collection('users');
    const userExist = await findByLogin(user.login);
    if (userExist) {
        throw new Exception({
            code: 'ENTITY_ALREADY_EXIST',
            fields: {
                login: user.login,
            },
            message: 'User with this login already exist',
        });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const result = await usersCollection.insert({
        login: user.login,
        email: user.email,
        password: hashedPassword,
        admin: user.admin,
        createdAt: new Date(),
        updatedAt: new Date(),
        removedAt: new Date(DATES.REMOVED_AT),
        specs: [],
    });

    return result.ops[0];
}

async function removeUser(user) {
    const usersCollection = db.get()
        .collection('users');
    await usersCollection.deleteOne({
        login: user.login,
    });
    return true;
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    removeUser,
    findById,
    findByLogin,
    findUserByEmailOrUid,
    addSpec,
    findOrCreate,
    removeSpec,
};

