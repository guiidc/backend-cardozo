require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'school_management',
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: '2056',
    database: 'school_management',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}