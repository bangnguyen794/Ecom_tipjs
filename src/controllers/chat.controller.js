const {isNullOrUndefinedOrEmpty} = require('../units/unit.val')
const  jsonwebtoken  = require('jsonwebtoken')
const {jwt:{secretKey}} = require('../configs/env.config')
var that = module.exports = {
    homepage: async (req,res,next)=>{
        res.sendFile(__basedir+'/index.html');
        
    },
  
}