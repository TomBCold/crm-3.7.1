const express = require('express');
const {
  Client, User, Contract, Driver, Forwarder, ClientInvoice, SupplierInvoice, Upd, Comment
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const contracts = await Contract.findAll({
    include: [
      {
        model: User
      },
      {
        model: Client
      },
      {
        model: Driver
      },
      {
        model: Forwarder
      },
      {
        model: ClientInvoice
      },
      {
        model: SupplierInvoice
      },
      {
        model: Upd
      },
      {
        model: Comment
      }],
    order: [['id', 'DESC']]
  });
  res.json(contracts);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await ClientInvoice.destroy({ where: { contractId: id } });
    await SupplierInvoice.destroy({ where: { contractId: id } });
    await Upd.destroy({ where: { contractId: id } });
    await Comment.destroy({ where: { contractId: id } });
    await Contract.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
