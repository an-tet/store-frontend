# Store

## Description

This project is a web application for a store management system. The application is the frontend of the store system and is responsible for the user interface and user experience. The application is built using React and Typescript.

## Project structure

```powershell
    ├───public
    ├───src
    │   ├───assets # Images, fonts and other assets
    │   ├───components
    │   ├───constants
    │   ├───data # Mocks but it will be deleted
    │   ├───enum
    │   ├───exceptions
    │   ├───interfaces
    │   ├───mapper # Data mapper 
    │   ├───models
    │   ├───pages # UI pages
    │   ├───routes
    │   ├───store # Redux store
    │   ├───theme
    │   └───utils
    └───test
```

## Setup

### Prerequisites

You need to have installed the backend project to run the frontend project. You can find the backend project in the link bellow: [backend](https://github.com/an-tet/store/tree/main/web/backend)

additionally you need to have installed the following tools:

- Node.js
- npm, yarn or another package manager

### Dependencies

The first step have been installed node and npm or yarn in your machine. After that you need to install the package manager with `yarn` running the command bellow:

```shell
npm install -g yarn
```

Then you can install the project dependencies running the command bellow:

```shell
yarn
```

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
