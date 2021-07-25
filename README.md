# Typescript Lambda APIGateway Example

# package.json configs

- `config.lambda`
- `config.log`

# package.json scripts

### Local test and cloudwatch log (for remote test helper)
- `test`: local test (change payload event in `src/test.ts`)
- `log`: realtime tail cloudwatch log

### Clear, Validate and Build (a bundle /dist/index)
- `clear`: rm deploy.zip dist/ deploy/
- `validate`: typescript validate
- `build`: npm run clear && ts-node src/esbuild (ESBuild create bundled file /dits/index.js)

### Zip and deploy
- `zip`: npm run build && ./scripts/zip.sh
- `deploy`: npm run zip && ./scripts/deploy.sh $npm_package_config_lambda

# scripts
- `scripts/deploy.sh`
- `scripts/log.sh`

