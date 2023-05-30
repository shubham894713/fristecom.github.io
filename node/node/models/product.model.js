const mongoose = require('mongoose');
const UserModel = require('./user.model');
const productModel = mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        minLength: 3,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    pic:{
        type: String,
        minLength: 3,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    reviews:[
        {
            rating:{
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            comment:{
                type: String,
                required: true
            },
            userId:{
                type: mongoose.ObjectId,
                required: true,
                ref: UserModel,
            }
        }
    ],
    numOfReviews:{
        type: Number,
        default: 0
    },
    createdBy:{
        type: mongoose.ObjectId,
        //required: true,
        ref: UserModel,
    }
});

module.exports = mongoose.model('ProductModel', productModel);