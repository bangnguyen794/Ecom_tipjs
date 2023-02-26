var that = module.exports = {

        is_phone: (phone)=>{
            let phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            return phone.test(string_value);
        },
        isNullOrUndefinedOrEmpty:(val)=>{
            return (val===null || val===undefined || val==='');
        },
        isNullOrUndefined:(val)=>{
            return (val===null || val===undefined);
        },
        isNull:(val)=>{
            return (val===null);
        },
        isUndefined:(val)=>{
            return (val===undefined);
        },
        ToInt:(val)=>{
            if(val===null || val===undefined || val==='')
            return 0;
            else {
                const result = parseInt(value, 10);
                return isNaN(result)?0:result;
            } 
        }
        
}      