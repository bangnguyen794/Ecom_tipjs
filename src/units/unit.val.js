module.exports = {
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