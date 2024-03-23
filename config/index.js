const dotenv = require('dotenv');
dotenv.config();
const config = require('./config.json');

config.development.username = process.env.POSTGRES_USER;
config.development.password = process.env.POSTGRES_PASSWORD;
config.development.database = process.env.POSTGRES_DB;

config.test.username = process.env.POSTGRES_USER;
config.test.password = process.env.POSTGRES_PASSWORD;
config.test.database = process.env.POSTGRES_DB;

config.production.username = process.env.POSTGRES_USER;
config.production.password = process.env.POSTGRES_PASSWORD;
config.production.database = process.env.POSTGRES_DB;

config.docker.username = process.env.POSTGRES_USER;
config.docker.password = process.env.POSTGRES_PASSWORD;
config.docker.database = process.env.POSTGRES_DB;
config.docker.host = process.env.DB_HOST;

module.exports = config;