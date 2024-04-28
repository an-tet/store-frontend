import scanner from 'sonarqube-scanner';
import 'dotenv/config';
import process from 'process';

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.sources': 'src',
      'sonar.exclusions': '',
      'sonar.projectName': 'store',
      'sonar.projectKey': 'store',
      'sonar.projectVersion': '0.0.1',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.projectDescription': 'store project for pymes',
      'sonar.tests': 'test',
      'sonar.login': process.env.SONARQUBE_TOKEN,
    },
  },
  () => process.exit()
);
