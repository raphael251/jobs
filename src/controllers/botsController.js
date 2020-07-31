const express = require('express');
const Bots = require('../models/bots');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;

        const result = await Bots.create({ name });

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on creating a new bot.' });
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await Bots.findAll();

        return res.send(result);
    } catch (err) {
        return res.status(400).send({ error: 'Error on reading the bots.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await Bots.findByPk(parseInt(req.params.id));

        return res.send(result);
    } catch (err) {
        res.status(400).send({ error: 'Error on reading the specific bot.' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        const result = await Bots.update({ 
            name 
        }, {
            where: {
                id
            }
        });

        if (!result)
            return res.status(404).send();
        
        return res.send({
            ...result,
            message: 'Bot successfully updated!'
        });
    } catch (err) {
        return res.status(400).send({ error: 'Error on updating the bot.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Bots.destroy({ where: { id } });

        if (!result)
            return res.status(404).send();
        
        return res.send({
            ...result,
            message: 'Bot successfully removed!'
        });
        
    } catch (err) {
        return res.status(400).send({ error: 'Error on deleting the bot.' });
    }
})

module.exports = router;