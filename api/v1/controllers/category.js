const category = require('../models/category'); // חיבור למודל של המוצרים
module.exports = {
    GetAllCategory:(req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים
        category.find().then((data) =>{
            return res.status(200).json(data);
        });
    },
    GetCategoryById:(req,res)=>{ // נקודת קצה עבור שליפת מוצר לפי מזהה מוצר
        
        let cid = req.params.id; // שמירת מזהה המוצר שנשלח
        category.findOne({cid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    RemoveCategoryById:(req,res)=>{ 
        
        let cid = req.params.id; 
        category.deleteOne({cid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    Addcategory:(req,res) =>{
        let body = req.body;
        category.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    UpdateCategory: (req,res)=>{ // נקודת קצה עבור עדכון מוצר לפי מזהה מוצר
        let cid =req.params.id;
        let body = req.body; // שמירת מזהה המוצר שנשלח
        category.updateOne({cid},body).then((data)=>{
            return res.status(200).json(data);
        });
    }
};