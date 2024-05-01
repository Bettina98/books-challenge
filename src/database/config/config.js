require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_DATABASE_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    port: process.env.DB_PORT_DEV
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
};
