const express = require('express');
const router = express.Router();
const {
    createNewOrder,
    getMyOrders,
    getOrderDetails,
    getAllOrders,
    deleteOrders,
    updateorderStatus,

} = require('./order.controller');
const { auth, validRoles } = require('../../middleware/auth');

router.post('/createNewOrder', auth, createNewOrder);
router.get('/getMyOrders', auth, getMyOrders );
router.get('/getOrderDetail', auth, getOrderDetails);
router.get('/admin/getAllOrders', auth, validRoles, getAllOrders);
router.delete('/admin/deleteOrders', auth, validRoles, deleteOrders);
router.put('/admin/updateorderStatus',auth,validRoles,updateorderStatus);
module.exports = router;