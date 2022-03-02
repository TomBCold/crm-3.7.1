require('dotenv').config();
const express = require('express');

const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const upload = require('./middleware/allMiddleware');
const { User, Role } = require('./db/models');

const clientRouter = require('./routes/clientRouter');
const driverRouter = require('./routes/driverRouter');
const forwarderRouter = require('./routes/forwarderRouter');
const carTypesRouter = require('./routes/carTypesRouter');
const contractRouter = require('./routes/contractRouter');
const invoiceRouter = require('./routes/invoiceRouter');

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'asdfg',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'authorisation'
}));

app.use((req, res, next) => {
  res.locals.userid = req.session?.userId;
  next();
});
app.use('/drivers', driverRouter);
app.use('/forwarders', forwarderRouter);
app.use('/types', carTypesRouter);
app.use('/client', clientRouter);
app.use('/contract', contractRouter);
app.use('/invoice', invoiceRouter);

app.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  const manager = await User.findOne(
    { include: { model: Role }, where: { email, password }, raw: true }
  );
  if (manager) {
    delete manager.password;
    req.session.user = manager;
    req.session.userId = manager.id;
    return res.json({ manager });
  }
  res.status(401).end();
});

app.get('/check', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  res.sendStatus(401);
});
app.post('/logout', (req,res) => {
  req.session.destroy()
  res.end()
})

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
