// config/index.js
import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Decide DB type (default MySQL, but can be PostgreSQL if needed later)
const dbType = process.env.DB_TYPE || 'mysql';

export const sequelize = new Sequelize(
  process.env.DB_NAME,       // database name
  process.env.DB_USER,       // username
  process.env.DB_PASSWORD,   // password
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || (dbType === 'postgres' ? 5432 : 3306),
    dialect: dbType,
    logging: false,           // disable SQL logging in console
  }
);

// Simple connection check (optional, can remove in production)
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
})();
