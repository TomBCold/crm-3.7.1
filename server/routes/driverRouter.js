const express = require('express');

const { Driver, CarType } = require('../db/models');

const router = express.Router();

router.get('/drivers', async (req, res) => {
  console.log('DRIVER');
  const driverAll = await Driver.findAll({include: { model: CarType }});
  res.json({ driverAll });
});

  module.exports = router
