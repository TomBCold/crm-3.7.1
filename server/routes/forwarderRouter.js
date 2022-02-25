const express = require('express');

const { Forwarder } = require('../db/models');

const router = express.Router();

router.get('/forwarders', async (req, res) => {
  const forwardersAll = await Forwarder.findAll();
  res.json({ forwardersAll });
});

  module.exports = router
