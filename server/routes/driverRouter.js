const express = require('express');

const { Driver, CarType } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const driverAll = await Driver.findAll({ include: { model: CarType } });
  res.json({ driverAll });
});
router.post('/', async (req, res) => {
  const { name, telephone, carTypeId } = req.body;
  try {
    const driver = await Driver.create({
      name, telephone, carTypeId
    });
    const newDriver = await Driver.findOne({
      order: [['id', 'DESC']],
      include: { model: CarType }
    });
    res.json({ newDriver });
  } catch (error) {
    console.log(error);
    res.sendStatus(200);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Driver.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
