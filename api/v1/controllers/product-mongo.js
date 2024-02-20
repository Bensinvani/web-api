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
    RemoveProductById:(req,res)=>{ 
        
        let pid = req.params.id; 
        product.deleteOne({pid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    AddProduct:(req,res) =>{
        let body = req.body;
        if(req.session.User == undefined)
        {
            return res.status(401).json({msg:"You Are Not autorized"});
        }
        product.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    UpdateProduct: (req,res)=>{ // נקודת קצה עבור עדכון מוצר לפי מזהה מוצר
        let pid =req.params.id;
        let body = req.body; // שמירת מזהה המוצר שנשלח
        product.updateOne({pid},body).then((data)=>{
            return res.status(200).json(data);
        });
    }
};

