const express = require('express');
const {
  Client, User, Contract, Driver, Forwarder, ClientInvoice, SupplierInvoice, Upd, Comment
} = require('../db/models');
const upload = require('../middleware/allMiddleware');

const router = express.Router();

router.get('/', async (req, res) => {
  const contracts = await Contract.findAll({
    include: [
      { model: User },
      { model: Client },
      { model: Driver },
      { model: Forwarder },
      { model: ClientInvoice },
      { model: SupplierInvoice },
      { model: Upd },
      { model: Comment }],
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

router.post('/', upload.fields([
  { name: 'imgClientInvoice', maxCount: 1 },
  { name: 'imgSupplierInvoice', maxCount: 1 },
  { name: 'urlUpd', maxCount: 1 }
]), async (req, res) => {
  try {
    const
      {
        userId,
        clientId,
        driverId,
        forwarderId,
        fileNameClientInvoice,
        sumClientInvoice,
        fileNameSupplierInvoice,
        sumSupplierInvoice,
        fileNameUpd,
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
    const newContract = await Contract.findOne({ order: [['id', 'DESC']] });
    await ClientInvoice.create({
      contractId: newContract.id, sum: sumClientInvoice, url: `/img/${req.body.fileNameClientInvoice}`, clientId
    });
    await SupplierInvoice.create({
      contractId: newContract.id,
      sum: sumSupplierInvoice,
      url: `/img/${req.body.fileNameSupplierInvoice}`,
      supplierId: 1
    });
    await Upd.create({
      contractId: newContract.id, sum: sumUpd, url: `/img/${req.body.fileNameUpd}`, supplierId: 1
    });
    const contract = await Contract.findOne({
      include: [
        { model: User },
        { model: Client },
        { model: Driver },
        { model: Forwarder },
        { model: ClientInvoice },
        { model: SupplierInvoice },
        { model: Upd },
        { model: Comment }],
      order: [['id', 'DESC']]
    });
    res.json({ contract });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
