
const bcrypt = require('bcrypt');
const hashedPasswordPromise = (password, saltRounds) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            resolve('');
        } else {
          resolve(hash);
        }
      });
    });
  };
  module.exports = hashedPasswordPromise;