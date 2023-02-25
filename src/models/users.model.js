const mongoose = require('mongoose');
const validator = require('validator');
const {is_phone} = require('../units/cus.validator')
const userSchema = new mongoose.Schema({
    use:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(v) {
              return v != null && v.trim().length > 0;
            },
            message: "Use is required"
          }
    },
    pass:{
        type:String,
        required:true, 
    },
    name: {
        type:String,
        required:true, 
        validate:[
            {validator: validator.isLength, args: [{ min: 2, max: 30 }],message:'Name must be between 2 and 30 characters' }
        ]
    },
    phone:{
        type:String,
        validate:[
            { validator: function(v){return is_phone(v)} ,message: 'Invalid phone ' }
        ]
    },
   
    email: {
        type:String,
        validate:[
            { validator: validator.isEmail,message: 'Invalid email' }
        ]
    },
    address: {
        required:false,
        city: {
          type: String,
          //required: true
        },
        district: {
            type: String,
            //required: true
          },
        Wards: {
            type: String,
            //required: true
          },
        address: {
            type: String,
            //required: true
          },
        
    }
  });
  const User = mongoose.model('User', userSchema);
  module.exports = User;