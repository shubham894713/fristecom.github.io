const mongoose = require('mongoose');
const ProductModel = require('./product.model');
const UserModel = require('./user.model');
const orderSchema = mongoose.Schema({
    shippingDetails:{
        address:{
            type: String,
            required:true,
        },
        city:{
            type: String,
            required: true,
        },
        country:{
            type: String,
            required: true,
        },
        pincode:{
            type: String,
            minLength: 7,
            maxLength: 7,
        },
        mobile:{
            type: String
        }
    },
    orderItems:[
        {
            productId:{
                type: mongoose.ObjectId,
                required: true,
                ref: ProductModel
            },
            name:{
                type: String,
            },
            price:{
                type: String,
                required: true,
            },
            quantity:{
                type: Number,
                required: true
            }
        }
    ],
    userId:{
        type: mongoose.ObjectId,
        required: true,
        ref: UserModel,
    },
    totalPrice:{
        type: Number,
    },
    totalAmount:{
        type: Number,
    },
    tax:{
        type: Number,
    },
    shippingPrice:{
        type: Number,
    },
    orderStatus:{
        type:String,
        default: 'processing',
        enum:[
            'processing',
            'accepted',
            'packed',
            'out for delivery',
            'delivered',
            'cancelled'
        ]
    },
    deliveredOn:{
        type: Date,
    },
    modeOfPayment:{
        type: Date,
    },
    createdAt:{
        type: Date,
    }
})

module.exports = mongoose.model('OrderModel', orderSchema);