import scanner from 'sonarqube-scanner';
import process from 'process';

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '',
      'sonar.projectName': 'store',
      'sonar.projectKey': 'store',
      'sonar.projectVersion': '0.0.1',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.projectDescription': 'store project for pymes',
      'sonar.login': 'sqp_fa795763c67dbb5f1b91d1406406653ddfe409d2',
    },
  },
  () => process.exit()
);
