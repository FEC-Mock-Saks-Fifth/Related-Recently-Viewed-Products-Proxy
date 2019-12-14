# Related-Recently-Viewed-Products

> This repo is for the SaksFifth Clone project proxy server.

## Related Projects

  - https://github.com/FEC-Mock-Saks-Fifth/Product-Review
  - https://github.com/FEC-Mock-Saks-Fifth/Nav-Search
  - https://github.com/FEC-Mock-Saks-Fifth/Product-Description
  - https://github.com/FEC-Mock-Saks-Fifth/Related-Recently-Viewed-Products

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Create a parent directory to store this repo and all of the companion repos listed above.
> For each companion repo: run seeding script, run bundling script (if applicable), run server.
> This proxy functions by serving the bundled code from each companion repo to the front end via index.html in the common directory. It routes all api calls per module back to their origin servers.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run start:dev
```