// נגדיר ראוטר דרכו נגדיר את כל נקודות הקצה
const express = require('express');
const router =  express.Router();
const auth = require('../../../auth');
// const productController = require('../controllers/product');
const {GetAllProducts, // ייבוא סלקטיבי של הפונקציות המבוקשות
    GetProductById,
    AddProduct,
    UpdateProduct,
    RemoveProductById
    } = require('../controllers/product');
router.get('/',GetAllProducts);
router.post('/',auth,AddProduct);
router.get('/:id',GetProductById);
router.patch('/:id',auth,UpdateProduct);
router.delete('/:id',auth,RemoveProductById);

module.exports = router; // ייצוא של הראוטר