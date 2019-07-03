const Sequelize = require('sequelize');
const sequelize = require('../database/index');

const Chats = sequelize.define('chats', {
    botId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'bots',
            key: 'id',
        },
        field: 'bot_id',
        allowNull: false,
    }
});

module.exports = Chats;