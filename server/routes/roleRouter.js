const express = require('express');

const { Role } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('ROLE=====');
  const roles = await Role.findAll();
  res.json({ roles });
});

module.exports = router
