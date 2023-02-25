const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwt} = require('../configs/env.config')
const authModel = {};
const User  = [] // Viết model kiểm tra user trong mongodb 


authModel.authenticateUser = async (username, password) => {
    try {
      // Find user in the database
      const user = await User.findOne({ username }); //Check username có tồn tại chưa
  
      // If user not found, return null
      if (!user) {
        return null;
      }
  
      //  kiểm tra password trong databse đúng chưa
      const isMatch = await bcrypt.compare(password, user.password);
  
      // If passwords don't match, return null
      if (!isMatch) {
        return null;
      }
  
      // Generate JWT and return it
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, jwt.secretKey, { expiresIn: '1h' });
      return token;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };
  
  module.exports = authModel;