// נגדיר ראוטר דרכו נגדיר את כל נקודות הקצה
const express = require('express');
const router =  express.Router();
// const productController = require('../controllers/product');
const {
    GetAllUsers, // ייבוא סלקטיבי של הפונקציות המבוקשות
    GetUsersById,
    AddUsers,
    UpdateUsers,
    RemoveUsersById,
    Register,
    Login
    } = require('../controllers/users');
router.get('/',GetAllUsers);
router.post('/',AddUsers);
router.get('/:id',GetUsersById);
router.patch('/:id',UpdateUsers);
router.delete('/:id',RemoveUsersById);
router.post('/register',Register); // נקודת קצה עבור הרשמה
router.post('/login',Login);

module.exports = router; // ייצוא של הראוטר