require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { User } = require('./db/models');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/auth', async (req, res) => {
  const {email, password} = req.body;
  const manager = await User.findOne({where : {email, password}, raw: true});  
  if (manager) {
    delete manager.password  
    res.json({manager})
  }
  res.end()
})

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
