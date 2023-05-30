const express = require('express');
const router = express.Router();
const {
    getAllproducts,
    getProductDetail,
    createNewProduct,
    editProduct,
    deleteProduct
} = require('./product.controller');
const { auth, validRoles } = require('../../middlewares/auth');

router.get('/getAllproducts',getAllproducts);
router.get('/productDetail', getProductDetail);
router.post('/admin/createNewProduct', auth, validRoles, createNewProduct);
router.put('/admin/editProduct', auth, validRoles, editProduct);
router.delete('/admin/deleteProduct', auth, validRoles, deleteProduct);


module.exports = router;