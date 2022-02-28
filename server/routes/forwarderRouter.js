const express = require('express');

const { Forwarder } = require('../db/models');

const router = express.Router();

router.get('/forwarders', async (req, res) => {
  const forwardersAll = await Forwarder.findAll();
  res.json({ forwardersAll });
});

router.post('/forwarders', async (req, res) => {
  console.log('ДОБАВЛЕНИЕ ЭКСПЕДИТОРА', req.body);
  const {name, telephone} = req.body;
  try {
    const forwarder = await Forwarder.create({
      name, telephone
    })
    res.json({forwarder});

   } catch (error) {
      console.log(error);
      res.sendStatus(200);
    }
  });

  router.delete('/forwarders/:id', async (req, res) => {
    console.log('УДАЛЕНИЕ', req.params);
    const { id } = req.params;
    try {
      await Forwarder.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });
  

  module.exports = router
