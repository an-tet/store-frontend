# Store

## Description

Portable sales system for small enterprises without costs and running in all places desktop, web and mobile environment. The application stores the data in cloud storage tear like Google Drive and OneDrive, resulting in minimal costs over time.

## Installation

The first step have been installed node and npm in your machine. After that you need to install the package manager `yarn` running the command bellow:

```node
npm install -g yarn
```

Then you can install the project dependencies running the command bellow:

```node
yarn install
```

After that you can run the project in development mode running the command bellow:

> [!NOTE]
> Run the project in development mode

```node
yarn start
```

## Testing

For running the tests we use `vitest` as test runner and `jest` as test framework. You can run the tests running the command bellow:

```node
yarn test
```

## SonarQube

For running SonarQube in local you need to get `podman`, `docker` or `SonarQube` installed in your own machine. after that you need to create bellow folder structure in your project root:

- `sonarqube/extensions`
- `sonarqube/data`
- `sonarqube/logs`

When SonarQube have been up and the folder structure have been created, you can run the command bellow and synchronize the project with SonarQube.

```bash
node ./sonarqube/sonarscan.js
```

## Environment variables

Use the `.env` file to set the environment variables.

- ``SONARQUBE_TOKEN``: Token to connect to SonarQube used in `./sonarqube/sonarscan.js` file
