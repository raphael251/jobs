const Sequelize = require('sequelize');
const sequelize = require('../database/index');

const Messages = sequelize.define('messages', {
    sentByUser: {
        type: Sequelize.BOOLEAN,
        field: 'sent_by_user',
        defaultValue: false
    },
    chatId: {
        type: Sequelize.INTEGER,
        field: 'chat_id',
        references: {
            model: 'chats',
            key: 'id',
        },
        allowNull: false,
    },
    text: {
        type: Sequelize.STRING(4000),
        allowNull: false,
    }
});

module.exports = Messages;