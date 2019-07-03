const express = require('express');

const Messages = require('../models/messages');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { chatId, sentByUser, text } = req.body;

        const result = await Messages.create({ chatId, sentByUser, text })

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on creating a message.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Messages.findByPk(parseInt(id));

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on getting the specific message.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Messages.destroy({ where: { id } });

        if (!result)
            return res.status(400).send();

        return res.send({
            ...result,
            message: 'Message successfully removed!'
        })
    } catch (err) {
        return res.status(400).send({ error: 'Error on deleting the specific message.' });
    }
});

module.exports = router;