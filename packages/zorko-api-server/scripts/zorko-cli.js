#!/usr/bin/env node
const loadSpecs = require('./loadSpecs');
const chalk = require('chalk');

require('yargs')
  .usage('$0 <cmd> [args]')
  .command(
    'load [src] [type] [dbUrl] [dbName] [previewSrc]', 'Upload specs to server storage', (yargs) => {
      yargs.positional('src', {
        type: 'string',
        default: __dirname,
        describe: 'Specifications source folder'
      });
      yargs.positional('type', {
        type: 'string',
        default: 'vl',
        describe: 'Type of specifications, `vl` is Vega-Lite, `vg` is Vega',
        choices: ['vl', 'vg']
      });
      yargs.positional('dbName', {
        type: 'string',
        default: 'zorko',
        describe: 'Database Name',
      });
      yargs.positional('dbUrl', {
        type: 'string',
        default: 'mongodb://localhost:27017/',
        describe: 'Database root URL',
      });
      yargs.positional('previewSrc', {
        type: 'string',
        describe: 'Generated previews folder',
      });
    },
    (argv) => {
      console.log('Start loading specs from: ', `${argv.src}`);
      loadSpecs({
        specsSrc: argv.src,
        dbUrl: argv.dbUrl,
        dbName: argv.dbName,
        previewsSrc: argv.previewSrc
      })
        .then(() => console.log(chalk.green('Done!')))
        .catch(err => console.error(err.message));
    }
  )
  .help()
  .argv;
