const db = require('../src/db/index');
const admin = require('../seeds/users/admin');
const chalk = require('chalk');
const log = console.log;

const {
  readSpecs, readFileNames, findAndReadPreviewBySpecName,
} = require('./utils');

const DEFAULT_DATE = '2018-05-04T17:00:00.000+0000';

const loadSpecs = async ({
  specsSrc,
  dbUrl,
  dbName,
  previewsSrc
}
) => {
  console.log('URL', dbUrl, dbName);
  try {
    db.connect({ name: dbName, url: dbUrl }, async (err) => {
      if (err) {
        console.error('Unable to connect to Mongo.', err.message);
        process.exit(1);
      } else {
        db.get()
          .dropDatabase();

        const usersCollection = db.get()
          .collection('users');
        const specsCollection = db.get()
          .collection('specs');

        const specFileNames = await readFileNames(specsSrc);
        const previews = await Promise.all(specFileNames.map(specName => findAndReadPreviewBySpecName(specName, previewsSrc)));

        const specs = await readSpecs(specsSrc);

        let specInsertResults = await Promise.all(specs.map(async ({ spec, type }, index) => {
          const schema = spec.$schema;
          // BJSON doesn't allow '$' in key
          delete spec.$schema;

          let result;
          try {
            result = await specsCollection.insertOne({
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
              type,
              preview: previews[index],
              createdAt: DEFAULT_DATE,
              updatedAt: DEFAULT_DATE,
            });
          } catch (error) {
            log(chalk.red`Issues with saving spec`, error);
          }
          return result;
        }));

        specInsertResults = specInsertResults.filter(Boolean);

        const specIds = specInsertResults.reduce((memo, result) => {
          memo.push(result.insertedId.valueOf());
          return memo;
        }, []);

        log(chalk.green`Database successfully filled with ${specIds.length} specs`);

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

        log(chalk.green`Database successfully filled with 1 user`);
        process.exit(0);
      }
    });
  } catch (e) {
    log(chalk.red`Error. db filled with error`, e);
    process.exit(1);
  }
};

module.exports = loadSpecs;

