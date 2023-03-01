
const { isNullOrUndefinedOrEmpty } = require('../units/unit.val')
const cookieHelper = {
    setCookie:(res,name,value,maxAge)=>{
        if(isNullOrUndefinedOrEmpty(name) || isNullOrUndefinedOrEmpty(value)){
            return false;
        }else{
            res.cookie(name,value,{maxAge:maxAge,httpOnly:true});
            console.log('Khoi tao cookie success')
            return true;
        }
    },
    deleteCookie:(res,name )=>{
        res.clearCookie(name)
    }
}
module.exports = cookieHelper;