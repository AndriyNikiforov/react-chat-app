const express = require('express');
const dotEnv = require('dotenv');
const { join } = require('path');
const { log, error } = require('console');

dotEnv.config();

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static(join(__dirname, 'build')));

server.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

server.listen(port, () => log(`http://localhost:${port}`));

server.on('error', (err) => error(err));
