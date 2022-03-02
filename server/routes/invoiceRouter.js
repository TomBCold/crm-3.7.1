const express = require('express');
const upload = require('../middleware/allMiddleware');
const { ClientInvoice, SupplierInvoice, Upd } = require('../db/models');

const router = express.Router();

router.post('/clientInvoice', upload.single('file'), async (req, res) => {
  try {
    console.log(req.body);
    const invoice = await ClientInvoice.create({
      contractId: req.body.id,
      sum: req.body.sum,
      clientId: req.body.clientId,
      url: `/img/${req.body.fileName}`
    });
    res.json({ invoice });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
