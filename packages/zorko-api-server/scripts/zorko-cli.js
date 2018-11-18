#!/usr/bin/env node

require('yargs')
    .usage('$0 <cmd> [args]')
    .command(
        'load [src] [type]', 'Upload specs to server storage', (yargs) => {
            yargs.positional('src', {
                type: 'string',
                default: __dirname,
                describe: 'Specifications source folder',
            });
            yargs.positional('type', {
                type: 'string',
                default: 'vl',
                describe: 'Type of specifications, `vl` is Vega-Lite, `vg` is Vega',
                choices: ['vl', 'vg'],
            });
        },
        (argv) => {
            console.log('Loading', `${argv.src} ${argv.type}`, 'loading specs');
        },
    )
    .help()
    .argv;
