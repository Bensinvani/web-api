
const express = require('express');
const router = express.Router();
const authSession = require('../../../authSession');

const {
    GetAllCategory,
    GetCategoryById,
    Addcategory,
    UpdateCategory,
    RemoveCategoryById
} = require('../controllers/category');

router.get('/', GetAllCategory);
router.post('/',authSession,Addcategory);
router.get('/:id',GetCategoryById);
router.patch('/:id',authSession,UpdateCategory);
router.delete('/:id',authSession,RemoveCategoryById);

module.exports = router;