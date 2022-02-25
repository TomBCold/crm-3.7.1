require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const {
  Client, User, Contract, Driver, Forwarder, ClientInvoice, SupplierInvoice, Upd
} = require('./db/models');

const driverRouter = require('./routes/driverRouter');
const forwarderRouter = require('./routes/forwarderRouter');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', driverRouter)
app.use('/', forwarderRouter)

app.post('/auth', async (req, res) => {
  const {email, password} = req.body;
  const manager = await User.findOne({where : {email, password}, raw: true});  
  if (manager) {
    delete manager.password  
    res.json({manager})
  }
  res.end()
})

app.get('/clients', async (req, res) => {
  const clients = await Client.findAll({ include: { model: User }, order: [['id', 'DESC']] });
  res.json(clients);
});

app.get('/contracts', async (req, res) => {
  console.log('!!!!!!!');
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
      }],
    order: [['id', 'DESC']]
  });
  res.json(contracts);
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
