# Store backend

## Description

This project is a web application for a store management system. The application is the backend of the store system and is responsible for the API that will be consumed by the frontend. The application is developed using NestJS, a framework for building efficient, reliable and scalable server-side applications.

## Setup

### Prerequisites

### Dependencies

The first step have been installed node and npm or yarn in your machine. After that you need to install the package manager with `yarn` running the command bellow:

```shell
npm install -g yarn
```

Then you can install the project dependencies running the command bellow:

```shell
yarn
```

### Environment

#### Database

The project uses a PostgreSQL database. You can use a `docker desktop` to run the database with docker compose the command bellow:

```shell
docker compose up -d
```

Or if you wanna use an alternative you can use `podman` to run the database container, you can run the container with the command bellow:

```shell
podman compose up -d
```

[docker desktop](https://www.docker.com/products/docker-desktop/)
[podman](https://podman.io)

#### Variables

The project uses environment variables to configure the application. You can copy a `.env.template` file in the root of the project and rename it to `.env`. After that you can set the variables in the file.

### Execution

After that you can run the project in a dev mode with the command bellow:

```node
yarn start:dev
```

### Test

To run the tests you can run the command bellow:

```shell
yarn run test
```

> [!NOTE]
> if you want to run in another mode you can see the `package.json` file.

### Postman

You can import the postman collection to test the API. You can access the collection in the link bellow:

[Postman Collection](https://www.postman.com/an-tet/workspace/personal/collection/18469786-e6e97a6e-bb33-488a-acf4-22ddc6117a8f?action=share&creator=18469786&active-environment=18469786-9eb6ddf1-339c-4d2f-b2a6-1680aae1febc)
