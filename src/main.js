require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const app = express()

//const mongoose = require('mongoose')
const { default: helmet } = require('helmet') //Dùng để  bảo mật khi chạy 1 request
global.__basedir = __dirname;
/*
*
*
*
*/
//Config env
//require('./configs/env.config')
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
app.use(require('../src/routers/login.router'))

/*
*
*
*
*/
// init db
require('./dbs/init.mongodb') 

const User = require('./models/users.model')

const new_user = new User({
    use:'bangnguyen',
    pass:'123123',
    name:'1',
    phone:'036674618',

});
//console.log(new_user);
new_user.validate((error)=>{
    
    if(error){
        console.log('Lỗi validate:: ', error.errors);
    }else{
        new_user.save().then(()=>{
                console.log('User saved');
        }).catch(err=> console.log('erro save:: '+err))   
    }
})

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
// Middlewaer:  xử lý kết nối trước khi next();
global._io.use((socket,next)=>{
    const {token} = socket.handshake.headers;
    console.log(token);
    if(token=="bangnguyen"){
        next();
    }
    console.log(`Soket_id  ${socket.id}`)
   
})
global._io.on('connection',SocketService.connection)
//handding error

module.exports = http;