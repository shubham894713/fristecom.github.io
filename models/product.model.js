const mongoose = require('mongoose');
const productModel = mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
        required:true,
        unique: true,
    },
    description:{
        type:String,
        minLength:3,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    pic:{
        type: String,
        minLength: 3,
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    rating:{
        type: Number,
        min: 0,
    },
})

module.exports =mongoose.model('ProductModel',productModel);