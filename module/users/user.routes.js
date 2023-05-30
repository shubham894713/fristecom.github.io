const express = require('express');
const router = express.Router();
const {
    loginUser,
    logoutUser,
    registerUser,
    getProfile,
    getAllUsers,
    updateMyProfile,
    deleteUser,
    forgotPassword,
} = require('./user.controller');
const { auth, validRoles } = require('../../middleware/auth');
router.post('/signUp', registerUser);
router.post('/login', loginUser);
router.put('/logout', logoutUser);
router.get('/me', auth, getProfile);
router.put('/me', auth, updateMyProfile);
router.get('/admin/getAllUsers', auth, validRoles, getAllUsers);
router.delete('/admin/deleteUser', auth, validRoles, deleteUser);
router.put('/forgotPassword', forgotPassword);
module.exports = router;