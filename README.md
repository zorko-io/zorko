# Zorko

An infrastructure for community to share, find and build vega visualizations

# Installation

## Preparation

* make sure that you have MongoDB installed and running in background on default port.
* copy  `./packages/*/env.sample` to `./packages/*/env`, follow instruction in comments


```bash
npm install
npx lerna bootstrap
```

## Start Server

### Load Seeds

>Do it once

```bash
cd ./packages/zorko-api-server
npm run seeds-to-preview
npm run seeds-to-db
```

### Start API server

```bash
npm run dev:server
```

## Start Client

```bash
npm run dev:client
```
