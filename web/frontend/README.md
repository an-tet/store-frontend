# Store

## Description

This project is a web application for a store management system. The application is the frontend of the store system and is responsible for the user interface and user experience. The application is built using React and Typescript.

## Setup

<!-- ### Environment variables

> [!NOTE]
> Avoid this configuration

Use the `.env` file to set the environment variables.

- ``SONARQUBE_TOKEN``: Token to connect to SonarQube used in `./sonarqube/sonarscan.js` file -->

### Dependencies

The first step have been installed node and npm in your machine. After that you need to install the package manager `yarn` running the command bellow:

```node
npm install -g yarn
```

Then you can install the project dependencies running the command bellow:

```node
yarn
```

<!-- ### SonarQube

For running SonarQube on community edition you need to get `podman`, `docker` or `SonarQube` installed in your own machine. after that you need to create bellow folder structure in your project root:

- `sonarqube/extensions`
- `sonarqube/data`
- `sonarqube/logs`

When SonarQube have been up and the folder structure have been created, you can run the command bellow and synchronize the project with SonarQube from your container.

```bash
node ./sonarqube/sonarscan.js
``` -->

### Execution

After that you can run the project in development mode running the command bellow:

> [!NOTE]
> Run the project in development mode

```node
yarn start
```

## Testing

### Unit tests

For running the tests we use `vitest` as test runner and `jest` as test framework. You can run the tests running the command bellow:

```node
yarn test
```

### Coverage

For running the coverage we use `vitest` as test runner and `jest` as test framework. You can run the coverage running the command bellow:

```node
yarn coverage
```
