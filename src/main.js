const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const app = express()
const mongoose = require('mongoose')
const { default: helmet } = require('helmet') //Dùng để  bảo mật khi chạy 1 request
global.__basedir = __dirname;
/*
*
*
*
*/
//Config env
require('./configs/env.config')
/*
*
*
*
*/
//inint middlewares
app.use(morgan("dev"))//In ra log khi chạy requets :  (dev , compile, common ...)
const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(helmet.contentSecurityPolicy({
    directives:{
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "cdnjs.cloudflare.com"],  //Cho phép đọc link này
        "script-src-attr": ["'none'"] //Chon phép sử dụng   JavaScript trực tiếp trong HTML bằng cách sử dụng thuộc tính "on" như "onclick" hoặc "onload"
    }
}))
app.use(compression());
app.use(express.json())
//app.use(morgan("compile")); //danh cho che do products
/*
*
*
*
*/
// init routers
app.use(require('../src/routers/chat.router'))
/*
*
*
*
*/
// init db
require('./dbs/init.mongodb') 
const { checkOverload }  = require('./helpers/check.connect')
checkOverload();
/*
*
*
*
*/
//socket io
const http = require('http').Server(app)
const io =require('socket.io')(http)
const SocketService = require('./services/chat.service');
global._io = io;
global._io.on('connection',SocketService.connection)
//handding error

module.exports = http;