const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const app = express()
const { default: helmet } = require('helmet') //Dùng để  bảo mật khi chạy 1 request
global.__basedir = __dirname;



//inint middlewares
app.use(morgan("dev"))//In ra log khi chạy requets :  (dev , compile, common ...)
const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(helmet())
app.use(compression());
app.use(express.json())
//app.use(morgan("compile")); //danh cho che do products

// init db

// init routers
app.use(require('../src/routers/chat.router'))

const http = require('http').Server(app)
const io =require('socket.io')(http)
const SocketService = require('./services/chat.service');

global._io = io;

global._io.on('connection',SocketService.connection)
//handding error

module.exports = http;