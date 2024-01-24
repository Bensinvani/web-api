const Category = require('../models/category');
module.exports = {
    GetAllCategory: (req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים   
        Category.find().then((data)=>{
            return res.status(200).json(data);
        });
    },
    GetCategoryById: (req,res) =>{
        let Catid = req.params.id;
        Category.find().then((data)=>{
            return res.status(200).json(data);
        });
    },
    Addcategory: (req,res) => {
        let body = req.body;
        Category.insertMany([body]).then((data)=>{
            return res.status(200).jason(data);
        });
    },
    UpdateCategory: (req,res) =>{
        let Catid = req.params.id;
        let body = req.body;
        Category.updateOne({Catid},body).then((data)=>{
            return res.status(200).json(data);
        });
    },
    RemoveCategoryById: (req,res)=>{ // נקודת קצה עבור מחיקת מוצר לפי מזהה מוצר
        let Catid = req.params.id; // שמירת מזהה המוצר שנשלח
        Category.deleteOne({Catid}).then((data)=>{
            return res.status(200).json(data);
        });
    }
};