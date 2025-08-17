import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME,        // your database name
  process.env.DB_USER,        // your username
  process.env.DB_PASS,        // your password
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',          // 👈 always MySQL, no SQLite fallback
    logging: false             // 👈 removes logs in console
  }
);
