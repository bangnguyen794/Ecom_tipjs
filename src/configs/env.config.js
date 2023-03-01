'user strick'
require('dotenv').config();
 // read file env
// dotenv.config();
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// if (process.env.NODE_ENV === 'development') {
//     dotenv.config({ path: '.env.development' });
//   } else if (process.env.NODE_ENV === 'production') {
//     dotenv.config({ path: '.env.production' });
//   } else if (process.env.NODE_ENV === 'testing') {
//     dotenv.config({ path: '.env.testing' });
//   }
const dev = {
    app:{
        port:process.env.DEV_APP_PORT || 3004
    },
    db:{
        host:process.env.DEV_DB_HOST || 'localhost',
        port:process.env.DEV_DB_PORT || 2707,
        name:process.env.DEV_DB_NAME || 'Shopro',
        use:process.env.DEV_DB_USER ,
        pass:process.env.DEV_DB_PASSWORD 
    },
    jwt:{
        secretKey: process.env.DEV_SECRETKEY
    }
}
const pro = {
    app:{
        port:process.env.PRO_APP_PORT || 3005
    },
    db:{
        host:process.env.PRO_DB_HOST || 'localhost',
        port:process.env.PRO_DB_PORT || 2707,
        name:process.env.PRO_DB_NAME || 'Shopro',
        use:process.env.PRO_DB_USER ,
        pass:process.env.PRO_DB_PASSWORD 

    },
    jwt:{
        secretKey: process.env.PRO_SECRETKEY
    }
}

const config ={dev,pro}
const env = process.env.NODE_ENV ||'dev'
module.exports = config[env];
