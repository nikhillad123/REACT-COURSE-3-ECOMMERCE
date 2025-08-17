import { Sequelize } from 'sequelize';

// Check if running on AWS RDS or similar
const isUsingRDS = process.env.RDS_HOSTNAME && process.env.RDS_USERNAME && process.env.RDS_PASSWORD;
const dbType = process.env.DB_TYPE || 'mysql';
const defaultPorts = {
  mysql: 3306,
  postgres: 5432,
};
const defaultPort = defaultPorts[dbType];

export let sequelize;

if (isUsingRDS) {
  // If you deploy to AWS RDS (MySQL/Postgres)
  sequelize = new Sequelize({
    database: process.env.RDS_DB_NAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT || defaultPort,
    dialect: dbType,
    logging: false
  });
} else {
  // Default to SQLite (local development or small deployments)
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // persistent file in project root
    logging: false
  });
}