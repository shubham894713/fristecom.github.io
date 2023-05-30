const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        minLength: 9,
        maxLength: 10,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    pic: {
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    numOfOrders:{
        type: Number,
    },
    secretQuestion:{
        type: String,
        required: true
    },
    secretAnswer:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: 'user',
        enum:['user', 'admin'],
    }
});
module.exports = mongoose.model('UserModel', userSchema);