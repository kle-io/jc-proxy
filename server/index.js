const express = require('express');
const cors = require('cors');
const path = require('path');
const Axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/0.bundle.js', (req, res) => {
  Axios.get('http://localhost:3002/0.bundle.js')
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {
    res.status(400).send();
  })
})

app.listen(port, () => { console.log(`Listening from port ${port}`)});