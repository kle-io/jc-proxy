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
app.get('/api/mainplayer/songs/:id', (req, res) => {
  res.redirect(`http://13.52.242.67/api/mainplayer/songs/${req.params.id}`);
});

// comments
app.get('/1.bundle.js', (req, res) => {
  res.redirect('http://13.52.80.254/1.bundle.js');
})

app.get('/2.bundle.js', (req, res) => {
  res.redirect('http://13.52.80.254/2.bundle.js');
})

app.get('/api/comments/songs', (req, res) => {
  res.redirect('http://13.52.80.254/api/comments/songs');
});

app.get('/api/comments/comments', (req, res) => {
  res.redirect('http://13.52.80.254/api/comments/comments');
});

app.post('/api/comments/comments', (req, res) => {
  res.redirect('http://13.52.80.254/api/comments/comments');
});

app.get('/api/comments/replies', (req, res) => {
  res.redirect('http://13.52.80.254/api/comments/replies');
});

// breaks bundle connection if before comments
app.use('/:id', express.static(path.join(__dirname, '../public/')));

// sidebar
app.get('/api/sidebar/songs/:id', (req, res) => {
  res.redirect(`http://52.9.251.132/api/sidebar/songs/${req.params.id}`);
});

// toolbar
app.get('/api/toolbar/songs/:id', (req, res) => {
  res.redirect(`http://52.53.160.124/api/toolbar/songs/${req.params.id}`);
});