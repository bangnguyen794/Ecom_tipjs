'user stress '

const mongoose  = require("mongoose")
const {countConnection} = require('../helpers/check.connect')

const stringConnect = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kojomqx.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);
class Database {
    constructor(){
        this.connect()
    }
    connect(type='mongodb'){
        if(1===1){
            mongoose.set('debug',true);
            mongoose.set('debug',{color:true});
        }
        mongoose.connect(stringConnect, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            maxPoolSize:500  //không cho vượt quá 500, nếu vượt quá sẽ ở chế độ chờ kết nối, khi có kết nối rãnh mới cho vào
        }).then( _ => {
            console.log('connect database mongodb Success !!');
        }).catch( err=> console.log(err))
    }
    //sử dụng instance chỉ muốn  gọi connect databse 1 lần duy nhất
    static getInstance(){
        if(!Database.instance){
            Database.instance=new Database();
        }
        return Database.instance;
    }

}
const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;