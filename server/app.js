require('dotenv').config();
const express = require('express');

const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const upload = require('./middleware/allMiddleware');
const {
  Client, User, Contract, Driver, Forwarder, ClientInvoice, SupplierInvoice, Upd, Comment
} = require('./db/models');

const driverRouter = require('./routes/driverRouter');
const forwarderRouter = require('./routes/forwarderRouter');
const carTypesRouter = require('./routes/carTypesRouter');
// const {checkAuthorisation} = require('./middleware/allMiddleware')

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'asdfg',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'authorisation',
}));

app.use((req, res, next) => {
  // res.locals.username = req.session?.user; // optional chaining operator
  res.locals.userid = req.session?.userId;
  next();
});


app.use('/drivers', driverRouter)
app.use('/forwarders', forwarderRouter)
app.use('/types', carTypesRouter)

app.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  const manager = await User.findOne({ where: { email, password }, raw: true });
  if (manager) {
    delete manager.password  
    req.session.userId = manager.id
    console.log(req.session.userId);
   return res.json({manager})
  }
  res.status(401).end()
})

app.get('/clients', async (req, res) => {
  const clients = await Client.findAll({ include: { model: User }, order: [['id', 'DESC']] });
  res.json(clients);
});

app.post('/clients', async (req, res) => {
  const {
    inputName, inputType, inputInn, inputTelephone
  } = req.body;
  await Client.create({
    userId: 1, name: inputName, type: inputType, inn: inputInn, telephone: inputTelephone
  });
  const newClients = await Client.findAll({ include: { model: User }, order: [['id', 'DESC']] });
  res.json(newClients);
});

app.get('/contracts', async (req, res) => {
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

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
