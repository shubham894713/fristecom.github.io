const OrderModel = require("../../models/order.model");

async function createNewOrder(req, res) {
  try {
    const {
      shippingDetails,
      orderItems,
      totalPrice,
      totalAmount,
      tax,
      shippingPrice,
      modeOfPayment,
    } = req.body;
    const { _id: userId } = req.user;
    const order = new OrderModel({
      shippingDetails,
      orderItems,
      totalPrice,
      totalAmount,
      tax,
      shippingPrice,
      modeOfPayment,
      userId
    });
    await order.save();
    return res.status(200).json({
      data: { order },
      code: 200,
      message: "order placed Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      data: {},
      code: 400,
      message: "something went wrong",
    });
  }
}

async function getMyOrders(req,res){
    try{
        const projection = {
            totalAmount:1,
            status:1,
            shippingDetails:1,
        }
        const { _id: userId } = req.user;
        const orders = await OrderModel.find({ userId },projection);
        return res.status(200).json({
            data: { orders },
            code: 200,
            message: 'Fetched all your orders',
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

async function getOrderDetails(req,res){
    try{
        const { orderId } = req.query;
        const order = await OrderModel.find({  _id: orderId });
        return res.status(200).json({
            data: { order },
            code: 200,
            message: 'Fetched all products',
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

async function getAllOrders(req,res){
    try{
        const projection = {
            totalAmount:1,
            status:1,
            shippingDetails:1,
        }
        const orders = await OrderModel.find({},projection);
        return res.status(200).json({
            data: { orders },
            code: 200,
            message: 'Fetched all products',
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

async function deleteOrder(req,res){
    try{
        console.log('getting product detail');
        const { orderId } = req.query;
        const order = await OrderModel.findOne({ _id: orderId });
        if(!order){
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'Invalid order id',
            }); 
        }
        await OrderModel.deleteOne({ _id: orderId });
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'order delete Successfully',
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 400,
            message: 'something went wrong',
        });
    }
}

async function updateOrderStatus(req,res){
    try{
        console.log('edit product');
        const { orderId } = req.body;
        const order = await OrderModel.findOne({ _id: orderId });
        if(!order){
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'Invalid order id',
            }); 
        }
        const updateObj = {
            orderStatus: req.body.orderStatus
        };
        const updateOrder = await OrderModel.updateOne({
            _id: OrderId  
        },{
            $set: updateObj
        });
        return res.status(201).json({
            data:{ updateOrder },
            code: 201,
            message: 'order updated successfully'
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

module.exports = {
  createNewOrder,
  getMyOrders,
  getOrderDetails,
  getAllOrders,
  deleteOrder,
  updateOrderStatus
};
