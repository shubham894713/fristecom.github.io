const express = require('express');
const router = express.Router();
const {
    createNewOrder,
    getMyOrders,
    getOrderDetails,
    getAllOrders,
    deleteOrder,
    updateOrderStatus,
} = require('./order.controller');
const { auth, validRoles } = require('../../middlewares/auth');

router.post('/createNewOrder', auth, createNewOrder);
router.get('/getMyOrders', auth, getMyOrders );
router.get('/getOrderDetail', auth, getOrderDetails);
router.get('/admin/getAllOrders', auth, validRoles, getAllOrders);
router.delete('/admin/deleteOrder', auth, validRoles, deleteOrder);
router.put('/admin/updateOrderStatus', auth, validRoles, updateOrderStatus);


module.exports = router;
