# Bitquery Data Platform Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ export NODE_OPTIONS=--max_old_space_size=16000
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### Deployment

Before deployment, add API key in `.env` file.

```
API_KEY = "YOUR_API_KEY"
```

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Generate PDF

```
yarn build

yarn serve

npx docusaurus-print-pdf -u http://localhost:3000/docs/intro

```

### How to Generate Schema Docs

- In the .env file, set your API key from graphQL IDE
- in the docusaurus.config.js uncomment the ```"@graphql-markdown/docusaurus",``` code snippet
- run npx-build docs

