const {User} =require('../models/userModel');
exports.userCreate = async (data) => {
    const { name, email } = data;
    const user = await User.create({name, email});
    
    return {
      user: user
    }
  }