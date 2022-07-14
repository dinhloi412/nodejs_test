const userService = require('../services/userSevice');

exports.userCreate = async (req, res, next) => {
 try {
   const user = await userService.createUser(req.body);
   return res.status(201).json(user);
 } catch (e) {
   return next(e);
 }
}