require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const driverRouter = require('./routes/driverRouter');
const forwarderRouter = require('./routes/forwarderRouter');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', driverRouter)
app.use('/', forwarderRouter)

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
