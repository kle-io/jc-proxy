const express = require('express');
const cors = require('cors');
const path = require('path');
const Axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => { console.log(`Listening from port ${port}`)});

// mainplayer
app.get('/api/mainplayer/songs', (req, res) => {
  res.redirect('http://13.52.242.67/api/mainplayer/songs');
});

// comments
app.get('/0.bundle.js', (req, res) => {
  Axios.get('http://52.53.152.162/0.bundle.js')
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {
    res.status(400).send();
  })
})

app.get('/api/comments/songs', (req, res) => {
  res.redirect('http://52.53.152.162/api/comments/songs');
});

app.post('/api/comments/comments', (req, res) => {
  res.redirect('http://52.53.152.162/api/comments/comments');
});

app.post('/api/comments/replies', (req, res) => {
  res.redirect('http://52.53.152.162/api/comments/replies');
});

// sidebar
app.get('/api/sidebar/songs', (req, res) => {
  res.redirect('http://52.9.251.132/api/sidebar/songs');
});

// toolbar
app.get('/api/toolbar/songs', (req, res) => {
  res.redirect('http://52.53.160.124/api/toolbar/songs');
});