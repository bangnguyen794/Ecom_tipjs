const User = require('../models/users.model');
const {setCookie} = require('../helpers/cookie.helper')
const bcrypt = require('bcrypt');
const {jwt:{secretKey}} = require('../configs/env.config')
const jsonwebtoken = require('jsonwebtoken')
var that = module.exports = (
{
    singin: async(req,res,err)=>{
        res.sendFile(__basedir+'/views/login/singup.html')
    },

    p_login:async (req,res)=>{
        try {
           
            const { username, password } = req.body;
            const user = await User.findOne({ use: username });
            console.log('secretKey:',secretKey, ',ispass:',await bcrypt.compare(password, user.pass));
            if(!user || !await bcrypt.compare(password, user.pass)){
                return res.status(401).json({ message: 'Incorrect username or password' });
            }else{
                const token = jsonwebtoken.sign({ userId: user._id, name:user.name }, secretKey,{ expiresIn: '120ms' });
                console.log('token',token);
                setCookie(res,'token',token,1000000);
                res.json({
                    success:true,
                    sratus:0,
                    mes:'login success'
                })
            }
        } catch (error) {
            res.status(401).json({
                success:false,
                status:1,
                mes:error
            })
        }
       
    }
}
)
