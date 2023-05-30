const UserModel = require('../../models/user.model');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const {
    genrateToken
} = require('../../middleware/auth');
async function registerUser(req,res){
    try{
        const { email,mobile,name,pic,password,secretQuestion,secretAnswer} = req.body;
        const UserCount = await UserModel.count({
            $or:[{ email}, { mobile}],
        })
        if(UserCount) {
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'user with given mobile or email already exist',
            });
        }
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = new UserModel({
            name,
            pic,
            password: hashPassword,
            email,
            mobile,
            secretAnswer,
            secretQuestion
        });
        user.save();
        return res.status(201).json({
            data:{ user },
            code: 201,
            message: 'Registered successfully'
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
}
async function loginUser(req,res){
    try{
        const { email, password } = req.body;
        const userCount = await UserModel.count({
            email
        })
        if(userCount !== 1) {
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'user doesnot exist',
            });
        }
        const user = await UserModel.findOne({ email }, { password: 1 });
        console.log(user);
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        console.log(isPasswordMatched);
        if(!isPasswordMatched) {
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'user password is wrong',
            });
        }
        const { token, options } = await genrateToken({ userId: user._id });
        return res.status(200).cookie('token', token, options).json({
            data:{},
            code: 201,
            message: 'login successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
}

async function logoutUser(req,res){
    try{
        return res.status(200).clearCookie('token').json({
            data: {},
            code: 201,
            message: 'logout successfully'
        });
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
    console.log('for logout');
    return res.send('here are for logout')
}

async function getProfile(req,res){
    const user = req.user;
    return res.status(201).json({
        data: { user },
        code: 201,
        message: "profile fetched successfully",
    });
}

async function getAllUsers(req, res) {
    try{
        const user = await UserModel.find();
        console.log(user)
        return res.status(201).json({
            data: { user },
            code: 201,
            message: "profile fetched successfully",
        });
    }catch (err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: "something went wrong",
        });
    }
}

async function updateMyProfile(req,res){
    try{
        const { email,mobile } = req.body;
        const userCount = await UserModel.count({
            $or: [{ email }, { mobile }],
        });
        if (userCount){
            return res.status(200).json({
                data: {},
                code: 400,
                message: "user with given mobile or email already exists",
            });
        }
        const { password } = req.body;
        const updateObj = {
            ...req.body,
        };
        if (password) {
            const hashPassword = await bcrypt.hash(password,saltRounds);
            delete updateObj.password;
            updateObj.password = hashPassword;
        }
        const { _id } = req.user;
        const updateUser = await UserModel.updateOne(
            {
                _id,
            },
            {
                $set: updateObj,
            }
        );
        return res.status(201).json({
            data: { updateUser },
            code: 201,
            message: "user updated successfully",
        });
    }catch (err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: "something went wrong",
        });
    }
}

async function deleteUser(req, res) {
    try {
      const { userId } = req.query;
      const user = await UserModel.findOne({ _id: userId });
      if (!user) {
        return res.status(200).json({
          data: {},
          code: 400,
          message: "Invalid user id",
        });
      }
      await UserModel.deleteOne({ _id: user });
      return res.status(200).json({
        data: {},
        code: 200,
        message: "user delete Successfully",
      });
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        data: {},
        code: 400,
        message: "something went wrong",
      });
    }
    console.log('data delete succesfully');
    return res.send('data delete Succesfully')
}
async function forgotPassword(req, res) {
    try{
        const {email,secretAnswer,secretQuestion,password } = req.query;
        const user = await userModel.findOne({
            email,
            secretAnswer,
            secretQuestion,
        });
        if(!user){
            return res.status(201).json({
                data: {},
                code: 400,
                message: "Invalid user id",
            });
        }
        const hashPassword = await bcrypt.hash(password, saltRounds);
        await UserModel.updateOne(
            { email,secretAnswer,secretQuestion },
            {
                $set: { password: hashPassword },
            }
        );
        return res.status(201).json({
            data: {},
            code: 200,
            message: "user password updated successfully",
        });
    }catch (err) {
        console.log(err);
        return res.status(201).json({
            data: {},
            code: 400,
            message: "something went wrong",
        });
    }
}


module.exports = {
    loginUser,
    logoutUser,
    registerUser,
    getProfile,
    getAllUsers,
    updateMyProfile,
    deleteUser,
    forgotPassword,
};