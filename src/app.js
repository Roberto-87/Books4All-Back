const express = require ('express');
const morgan = require ('morgan');
const mainRouter = require('./routes');

const server = express();

server.use(morgan('dev'));

server.use(mainRouter)
// simple change


module.exports = server;