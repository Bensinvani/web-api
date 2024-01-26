
const express = require('express');
const router = express.Router();

const {
    GetAllCategory,
    GetCategoryById,
    Addcategory,
    UpdateCategory,
    RemoveCategoryById
} = require('../controllers/category');

router.get('/', GetAllCategory);
router.post('/',Addcategory);
router.get('/:id',GetCategoryById);
router.patch('/:id',UpdateCategory);
router.delete('/:id',RemoveCategoryById);

module.exports = router;