const { ok, deepEqual } = require('assert');
const axios = require('axios');

const MOCK_CHAT = { 
    id: 2,
    botId: 1 
};
let MOCK_DELETE_CHAT = {};

const BASE_URL = `http://localhost:3000/chats`;

describe('Suíte for chats manipulating tests', function () {
    
    it('POST /chats - Should return the success status (200) and the botId', async () => {
        const result = await axios.post(BASE_URL, { botId: MOCK_CHAT.botId });

        MOCK_DELETE_CHAT = result.data;

        ok(parseInt(result.status) === 200)
        ok(parseInt(result.data.botId) === MOCK_CHAT.botId);
    });

    it('GET /chats - Should return the success status (200) and all the registered chats', async () => {
        const result = await axios.get(BASE_URL);

        ok(parseInt(result.status) === 200);
        ok(result.data.length >= 1);
    });

    it('GET /chats/:id - Should return the success status (200) and the chat that corresponds to the ID', async () => {
        const result = await axios.get(`${BASE_URL}/${MOCK_CHAT.id}`);
        
        ok(parseInt(result.status) === 200);
        ok(parseInt(result.data.id) === MOCK_CHAT.id);
    });

    it('GET /chats/:id/messages - Should return the success status (200) and the messages containing the same chatId', async () => {
        const chatId = 3;

        const result = await axios.get(`${BASE_URL}/${chatId}/messages`);

        ok(parseInt(result.status) === 200);
        ok(result.data.every(message => message.chatId === chatId));
    });

    it('DELETE /chats/:id - Should return the success status (200) and the message "Chat successfully removed!"', async () => {
        const result = await axios.delete(`${BASE_URL}/${MOCK_DELETE_CHAT.id}`);
        
        ok(parseInt(result.status) === 200);
        ok(result.data.message === 'Chat successfully removed!');
    });

});

