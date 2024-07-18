export const envConfig = () => ({
  applicationPort: +process.env.BACKEND_APP_PORT || 3002,
  postgresHost: process.env.POSTGRES_HOST,
  postgresPort: +process.env.POSTGRES_PORT,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDb: process.env.POSTGRES_DB,

  jwtSecret: process.env.JWT_SECRET,
});
