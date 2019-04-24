const express = require('express');

const NewRouter = require('./router/New-Router.js');

const server = express();

server.use(express.json());



server.use('/api/posts', NewRouter)


module.exports = server;