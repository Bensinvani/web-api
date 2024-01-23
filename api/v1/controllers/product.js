const product = require('../models/product'); // חיבור למודל של המוצרים
module.exports = {
    GetAllProducts:(req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים
        product.find().then((data) =>{
            return res.status(200).json(data);
        });
    },
    GetProductById:(req,res)=>{ // נקודת קצה עבור שליפת מוצר לפי מזהה מוצר
        
        let pid = req.params.id; // שמירת מזהה המוצר שנשלח
        product.findOne({pid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    GetProductById:(req,res)=>{ // נקודת קצה עבור שליפת מוצר לפי מזהה מוצר
        
        let pid = req.params.id; // שמירת מזהה המוצר שנשלח
        product.deleteOne({pid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    AddProduct:(req,res) =>{
        let body = req.body;
        product.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    UpdateProduct: (req,res)=>{ // נקודת קצה עבור עדכון מוצר לפי מזהה מוצר
        let pid =req.params.id;
        let body = req.body; // שמירת מזהה המוצר שנשלח
        product.updateMany({pid},[body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    DeleteProduct:  (req,res)=>{ // נקודת קצה עבור מחיקת מוצר לפי מזהה מוצר
        
        let pid = req.params.id; // שמירת מזהה המוצר שנשלח
        return res.status(200).json({msg:`Deleted Product id ${pid}`});
    }
};