const { ok, deepEqual } = require('assert');
const axios = require('axios');

const BASE_URL = `http://localhost:3000/messages`
const MOCK_MESSAGE = {
    sentByUser: true,
    chatId: 3,
    text: 'Olá!'
}
const MOCK_ID_MESSAGE = 2;
let lastCreatedId = null;

describe('Suíte for chats manipulating tests', function () {

    it('POST /messages - Should return the success status (200) and the chatId', async () => {
        const result = await axios.post(BASE_URL, MOCK_MESSAGE);
        
        lastCreatedId = parseInt(result.data.id);

        ok(parseInt(result.status) === 200)
        ok(parseInt(result.data.chatId) === MOCK_MESSAGE.chatId);
    });

    it('GET /messages/:id - Should return the success status (200) and the message that corresponds to the ID', async () => {
        const result = await axios.get(`${BASE_URL}/${MOCK_ID_MESSAGE}`);
        
        ok(parseInt(result.status) === 200);
        ok(result.data.text === MOCK_MESSAGE.text);
    });

    it('DELETE /messages/:id - Should return the success status (200) and the message "Message successfully removed!"', async () => {
        const result = await axios.delete(`${BASE_URL}/${lastCreatedId}`)
        
        ok(parseInt(result.status) === 200);
        ok(result.data.message === 'Message successfully removed!');
    });
});