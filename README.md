# Store

## SonarQube

For running SonarQube in local you need to get `podman`, `docker` or `SonarQube` installed in your own machine and when SonarQube have been up run the command bellow and synchronize the project with SonarQube.

```bash
node ./sonarqube/sonarscan.js
```

## Environment variables

Use the `.env` file to set the environment variables.

- ``SONARQUBE_TOKEN``: Token to connect to SonarQube used in `./sonarqube/sonarscan.js` file
