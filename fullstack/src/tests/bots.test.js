const { ok, deepEqual } = require('assert');
const axios = require('axios');

const BASE_URL = 'http://localhost:3000/bots';
const POST_MOCK_DATA = { name: 'BOTânico' };
let GET_BY_ID_MOCK_DATA = {};
const PUT_MOCK_DATA = { name: 'BOTina' };

describe('Suíte for bots manipulating test', function () {
    
    it('POST /bots - Should return the success status (200) and the name that corresponds to the bot', async () => {
        const result = await axios.post(BASE_URL, POST_MOCK_DATA);
        
        GET_BY_ID_MOCK_DATA = result.data;

        ok(parseInt(result.status) === 200);
        ok(result.data.name === POST_MOCK_DATA.name);
    });

    it('GET /bots - Should return the success status (200) and all the registered bots', async () => {
        const result = await axios.get(BASE_URL);
        
        ok(parseInt(result.status) === 200);
        ok(result.data.length >= 1);
    });

    it('GET /bots/:id - Should return the success status (200) and the bot that corresponds to the ID', async () => {
        const result = await axios.get(`${BASE_URL}/${GET_BY_ID_MOCK_DATA.id}`);

        ok(parseInt(result.status) === 200)
        ok(result.data.id === GET_BY_ID_MOCK_DATA.id);
    });

    it('PUT /bots/:id - Should return the success status (200) and the message "Bot successfully updated!"', async () => {
        const result = await axios.put(`${BASE_URL}/${GET_BY_ID_MOCK_DATA.id}`, PUT_MOCK_DATA);

        ok(parseInt(result.status) === 200)
        deepEqual(result.data.message, 'Bot successfully updated!');
    });

    it('DELETE /bots/:id - Should return the success status (200) and the message "Bot successfully removed!"', async () => {
        const result = await axios.delete(`${BASE_URL}/${GET_BY_ID_MOCK_DATA.id}`);

        ok(parseInt(result.status) === 200)
        deepEqual(result.data.message, 'Bot successfully removed!');
    });

});

