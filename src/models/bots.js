const Sequelize = require('sequelize');
const sequelize = require('../database/index');

const Bots = sequelize.define('bots', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Bots;