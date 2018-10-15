require('dotenv')
    .config();
const config = require('../src/config');
const db = require('../src/db');
const admin = require('./users/admin');
const {
    readSpecs, readFileNames, SEEDS_SPECS_PATH, findAndReadPreviewBySpecName,
} = require('./utils');

const DEFAULT_DATE = '2018-05-04T17:00:00.000+0000';

const loadSeedsToDb = async () => {
    try {
        db.connect(config.db.url, async (err) => {
            if (err) {
                console.log('Unable to connect to Mongo.');
                process.exit(1);
            } else {
                db.get()
                    .dropDatabase();
                const usersCollection = db.get()
                    .collection('users');
                const specsCollection = db.get()
                    .collection('specs');

                const specFileNames = await readFileNames(SEEDS_SPECS_PATH);
                const previews = await Promise.all(specFileNames.map(findAndReadPreviewBySpecName));

                const specs = await readSpecs();

                const specInsertResults = await Promise.all(specs.map((spec, index) => {
                    const schema = spec.$schema;
                    // BJSON doesn't allow '$' in key
                    delete spec.$schema;

                    return specsCollection.insertOne({
                        spec: {
                            ...spec,
                            schema,
                        },
                        title: spec.description,
                        createdBy: {
                            login: admin.login,
                            firstName: admin.firstName,
                            lastName: admin.lastName,
                            avatarUtl: admin.avatarUtl,
                        },
                        preview: previews[index],
                        createdAt: DEFAULT_DATE,
                        updatedAt: DEFAULT_DATE,
                    });
                }));

                const specIds = specInsertResults.reduce((memo, result) => {
                    memo.push(result.insertedId.valueOf());
                    return memo;
                }, []);

                console.log(`Database successfully filled with ${specIds.length} specs`);

                await usersCollection.insertOne({
                    email: admin.email,
                    login: admin.login,
                    password: admin.password,
                    admin: admin.admin,
                    createdAt: admin.createdAt,
                    updatedAt: admin.updatedAt,
                    removedAt: admin.removedAt,
                    firstName: admin.firstName,
                    lastName: admin.lastName,
                    avatarUtl: admin.avatarUtl,
                    specs: specIds,
                });

                console.log('Database successfully filled with 1 user');
                process.exit(0);
            }
        });
    } catch (e) {
        console.log('Error. db filled with error', e);
        process.exit(1);
    }
};

loadSeedsToDb();
