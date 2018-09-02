const util = require('util');
const fs = require('fs');
const rimraf = require('rimraf');
const vl = require('vega-lite');
const vega = require('vega');

const promiseReaddir = util.promisify(fs.readdir);
const promiseReadFile = util.promisify(fs.readFile);
const promiseRimRaf = util.promisify(rimraf);
const promiseWriteFile = util.promisify(fs.writeFile);

const readFileNames = async folderPath => promiseReaddir(folderPath);
const readFile = async filePath => promiseReadFile(filePath);
const removeAllFilesInFolder = async folderPath => promiseRimRaf(`${folderPath}/*`);
const writeFile = async (filePath, content) => promiseWriteFile(filePath, content);

const SEEDS_SPECS_PATH = `${__dirname}/specs/vega-lite`;
const SEEDS_PREVIEWS_PATH = `${__dirname}/previews/vega-lite`;
const SEEDS_DATA_PATH = `${__dirname}/`;

const getSpecFilePath = fileName => `${SEEDS_SPECS_PATH}/${fileName}`;
const getPreviewFilePath = fileName => `${SEEDS_PREVIEWS_PATH}/${fileName}`;

const readSpecs = async () => {
    let specs = [];
    try {
        const filenames = await readFileNames(SEEDS_SPECS_PATH);
        const fileBuffers = await Promise.all(filenames.map(filename => readFile(getSpecFilePath(filename))));
        specs = fileBuffers.map(buffer => JSON.parse(buffer.toString()));
    } catch (e) {
        console.error(e);
    }
    return specs;
};

const specNameToPreviewName = (specName) => specName.replace('.json', '.svg');

async function renderAsSVG(spec) {
    const vg = new vega.View(vega.parse(spec), {
        loader: vega.loader({ baseURL: SEEDS_DATA_PATH }),
        logLevel: vega.Warn,
        renderer: 'none',
    });

    return vg.toSVG();
}

const generatePreviews = async () => {
    try {
        let filenames = await readFileNames(SEEDS_PREVIEWS_PATH);
        if (filenames.length > 0) {
            await removeAllFilesInFolder(SEEDS_PREVIEWS_PATH);
        }
        let specs = await readSpecs();
        specs = specs.map((val) => {
            let spec;
            try {
                spec = vl.compile(val).spec;
            } catch (e) {
                console.error(e);
            }
            return spec;
        });

        specs = specs.map(async (val) => {
            let content = val;
            if (content) {
                try {
                    content = await renderAsSVG(content);
                } catch (e) {
                    console.error(e);
                    content = '';
                }
            } else {
                content = '';
            }
            return content;
        });

        specs = await Promise.all(specs);
        filenames = await readFileNames(SEEDS_SPECS_PATH);

        const writeStats = filenames.map(async (filename, index) => {
            let writeStatus = 'none';
            const previewFileName = specNameToPreviewName(filename);
            const previewPath = getPreviewFilePath(previewFileName);
            const spec = specs[index];
            if (spec) {
                try {
                    writeStatus = await writeFile(previewPath, spec);
                } catch (e) {
                    console.error(e);
                }
            }
            return writeStatus;
        });

        await Promise.all(writeStats);
    } catch (e) {
        console.error(e);
    }
};

const findAndReadPreviewBySpecName = async (specFileName) => {
    const previewFileName = specNameToPreviewName(specFileName);
    const previewPath = getPreviewFilePath(previewFileName);
    let content = '';
    try {
        content = await readFile(previewPath);
        content = content.toString();
    } catch (e) {
        console.error(e);
    }
    return content;
};


module.exports = {
    SEEDS_SPECS_PATH,
    readFileNames,
    generatePreviews,
    readSpecs,
    findAndReadPreviewBySpecName,
};

