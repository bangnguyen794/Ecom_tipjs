const express = require('express')
const { default: helmet } = require('helmet') //Dùng để  bảo mật khi chạy 1 request
const app = express()
const morgan = require('morgan')
const compression = require('compression')
//inint middlewares
app.use(morgan("dev"))//In ra log khi chạy requets :  (dev , compile, common ...)
app.use(helmet())
app.use(compression());
//app.use(morgan("compile")); //danh cho che do products

// init db

// init routers
app.get('/',(req,res,next)=>{
    const str_conpress = "Heloo world "; 
    return res.status(200).json({message:str_conpress});
});
//handding error
 
module.exports = app;