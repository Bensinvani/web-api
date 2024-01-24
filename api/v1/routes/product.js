// נגדיר ראוטר דרכו נגדיר את כל נקודות הקצה
const express = require('express');
const router =  express.Router();
//const productController = require('../controllers/product');
const {GetAllProducts, // ייבוא סלקטיבי של הפונקציות המבוקשות
    GetProductById,
    AddProduct,
    UpdateProduct,
    RemoveProductById,
    RemoveProductById} = require('../controllers/product');
router.get('/',GetAllProducts);
router.post('/',AddProduct);
router.get('/:id',GetProductById);
router.patch('/:id',UpdateProduct);
router.delete('/:id',RemoveProductById);

module.exports = router; // ייצוא של הראוטר