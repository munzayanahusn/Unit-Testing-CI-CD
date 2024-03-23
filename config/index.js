const dotenv = require('dotenv');
dotenv.config();
const config = require('./config.json');

config.development.username = process.env.DB_USERNAME;
config.development.password = process.env.DB_PASSWORD;
config.development.database = process.env.DB_NAME;
config.test.username = process.env.DB_USERNAME;
config.test.password = process.env.DB_PASSWORD;
config.test.database = process.env.DB_NAME;
config.production.username = process.env.DB_USERNAME;
config.production.password = process.env.DB_PASSWORD;
config.production.database = process.env.DB_NAME;

module.exports = config;