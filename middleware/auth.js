const secretKey = 'regexEcomerce';
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model");
const specialRoles = [ 'admin'];

async function genrateToken({ userId }) {
    const token = await jwt.sign({ userId }, secretKey);
    const options = {
        expires: new Date( Date.now() + 7*24*60*60*1000),
        httpOnly: true,
    }
    return{ token, options }
}

async function auth(req, res, next) {
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(200).json({
          data: {},
          code: 400,
          message: "please login again",
        });
      }
      const decodedToken = await jwt.verify(token, secretKey);
      const { userId } = decodedToken;
      const user = await UserModel.findOne({ _id: userId });
      if (!user) {
        return res.status(200).json({
          data: {},
          code: 400,
          message: "user doesnot exist, please login again",
        });
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        data: {},
        code: 400,
        message: "something went wrong, please login again",
      });
    }
  }
  
  async function validRoles(req,res, next) {
      console.log(req.user);
      const { role } = req.user;
      console.log(specialRoles.includes(role),specialRoles,role);
      if(specialRoles.includes(role)){
          return next();
      }
      return res.status(200).json({
          data: {},
          code: 400,
          message: "you don't have permission for this action",
        });
  }
  
  module.exports = {
    genrateToken,
    auth,
    validRoles
  };