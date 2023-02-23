const dotenv = require('dotenv'); // read file env
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
  } else if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
  } else if (process.env.NODE_ENV === 'testing') {
    dotenv.config({ path: '.env.testing' });
  }

  module.exports = process.env;
