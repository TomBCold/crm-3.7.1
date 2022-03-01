const express = require('express');

const { CarType } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const types = await CarType.findAll();
  res.json({ types });
});

module.exports = router
