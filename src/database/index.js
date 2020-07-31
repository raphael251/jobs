const Sequelize = require('sequelize');
const dbConfig = require('../config/database.json');
const sequelize = new Sequelize(`postgres://${dbConfig.DB_USER}:${dbConfig.DB_PASS}@motty.db.elephantsql.com:5432/${dbConfig.DB_NAME}`);

module.exports = sequelize;

