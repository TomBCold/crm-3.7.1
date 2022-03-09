require('dotenv').config();
const express = require('express');

const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// import { WebSocketServer } from 'ws';
const FileStore = require('session-file-store')(session);
const upload = require('./middleware/allMiddleware');
const { User, Role } = require('./db/models');

const clientRouter = require('./routes/clientRouter');
const driverRouter = require('./routes/driverRouter');
const forwarderRouter = require('./routes/forwarderRouter');
const carTypesRouter = require('./routes/carTypesRouter');
const contractRouter = require('./routes/contractRouter');
const roleRouter = require('./routes/roleRouter');

const app = express();

// const wss = new WebSocket.Server({ port: 9077 });

// wss.on('connection', (client) => {
//   console.log('connection');
//   client.on('message', (data) => {
//     console.log('received: %s', data);
//   });

//   client.send('something');
// });

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
app.use('/roles', roleRouter);

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
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.end();
});

app.get('/users', async (req, res) => {
  const users = await User.findAll({ include: { model: Role } });

  res.json({ users });
});

app.post('/addUser', async (req, res) => {
  try {
    const {
      name, telephone, password, email, roleId
    } = req.body;
    const addUser = await User.create({
      name, telephone, password, email, roleId
    });
    const newUser = await User.findOne({
      order: [['id', 'DESC']],
      include: { model: Role }
    });
    res.json({ newUser });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.post('/avatar', upload.single('file'), async (req, res) => {
  // await User.update(req.body.photo{where: {id: req.body.id}})
  console.log(req.body.id);
  console.log(req.file.filename);
  await User.update({photo: `/img/${req.file.filename}`}, {where: {id: req.body.id}})
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
