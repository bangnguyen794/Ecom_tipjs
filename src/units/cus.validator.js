var that = module.exports = {
        is_phone: (phone)=>{
            let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            return phone_regex.test(phone);
        }
}      