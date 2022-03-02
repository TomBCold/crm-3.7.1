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
  console.log('УДАЛИТЬ ========>');
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

router.put('/:id', async (req, res) => {
  console.log('ИЗМЕНИТЬ========', req.body);
  const { status, stutus } = req.body
  try {

    console.log('00000');
    await Contract.update({ [status]: stutus }, { where: { id: req.params.id } });
    const newStatus = await Contract.findOne({ where: { id: req.params.id } });
    res.json(newStatus);
    console.log('newStatus ========>', newStatus);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
