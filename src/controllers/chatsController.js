const express = require('express');
const Chats = require('../models/chats');
const Messages = require('../models/messages');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { botId } = req.body;

        const result = await Chats.create({
            botId
        });

        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error on creating the chat.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await Chats.findAll();

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on getting the chats.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Chats.findByPk(parseInt(id));

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on getting the specific chat.' });
    }
});

router.get('/:id/messages', async (req, res) => {
    try {
        const chatId = req.params.id;

        const result = await Messages.findAll({ where: { chatId } });

        if (!result)
            return res.status(400).send();

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on getting the messages from this chatId.' });        
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Chats.destroy({ where: { id } });

        if (!result)
            return res.status(400).send(); 
        
        return res.send({
            ...result,
            message: 'Chat successfully removed!'
        });
    } catch (err) {
        return res.status(400).send({ error: 'Error on deleting the specific chat.' });
    }
});

module.exports = router;