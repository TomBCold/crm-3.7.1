const express = require('express');
const { Client, User } = require('../db/models');
const {Op} = require("sequelize")

const router = express.Router();

router.get('/', async (req, res) => {
  const clients = await Client.findAll({ include: { model: User }, order: [['id', 'DESC']] });
  res.json(clients);
});

router.post('/', async (req, res) => {
  const {
    userId, inputName, inputType, inputInn, inputTelephone
  } = req.body;
  await Client.create({
    userId, name: inputName, type: inputType, inn: inputInn, telephone: inputTelephone
  });
  const newClients = await Client.findAll({ include: { model: User }, order: [['id', 'DESC']] });
  res.json(newClients);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Client.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
