const express = require('express');
const {
  Client, User, Contract, Driver, Forwarder, ClientInvoice, SupplierInvoice, Upd, Comment
} = require('../db/models');
const upload = require('../middleware/allMiddleware');

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

router.put('/:id', async (req, res) => {
  const { status, stutus } = req.body;
  try {
    await Contract.update({ [status]: stutus }, { where: { id: req.params.id } });
    const newStatus = await Contract.findOne({ where: { id: req.params.id } });
    res.json(newStatus);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/', upload.single('file'), async (req, res) => {
  const
    {
      userId,
      clientId,
      driverId,
      forwarderId,
      imgClientInvoice,
      sumClientInvoice,
      imgSupplierInvoice,
      sumSupplierInvoice,
      imgUpd,
      sumUpd
    } = req.body;
  await Contract.create({
    userId,
    clientId,
    driverId,
    forwarderId,
    statusApprove: false,
    statusPaymentClient: false,
    statusPaymentSupplier: false,
    statusExport: false,
    statusSignature: false,
    statusPackage: false
  });
  const newContract = Contract.findOne({ order: [['id', 'DESC']] });
  await ClientInvoice.create({
    contractId: newContract.id, sum: sumClientInvoice, url: imgClientInvoice, clientId
  });
  await SupplierInvoice.create({
    contractId: newContract.id, sum: sumSupplierInvoice, url: imgSupplierInvoice, supplierId: 1
  });
  await Upd.create({
    contractId: newContract.id, sum: sumUpd, url: imgUpd, supplierId: 1
  });
  const contract = await Contract.findOne({
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
  res.json({ contract });
});

module.exports = router;
