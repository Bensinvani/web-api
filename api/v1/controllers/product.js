module.exports = {
    GetAllProducts:(req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים
        
        return res.status(200).json({msg:"All product"});
    },
    GetProductById:(req,res)=>{ // נקודת קצה עבור שליפת מוצר לפי מזהה מוצר
        
        let pid = req.params.id; // שמירת מזהה המוצר שנשלח
        return res.status(200).json({msg:`Get Product id ${pid}`});
    },
    AddProduct:(req,res) =>{
        const body = req.body;
        return res.status(200).json({msg:"Added New Product", body});
    },
    UpdateProduct: (req,res)=>{ // נקודת קצה עבור עדכון מוצר לפי מזהה מוצר
        let id =req.params.id;
        let pid = req.params.id; // שמירת מזהה המוצר שנשלח
        return res.status(200).json({msg:`Uptade Product ${id}` , body});
    },
    DeleteProduct:  (req,res)=>{ // נקודת קצה עבור מחיקת מוצר לפי מזהה מוצר
        
        let pid = req.params.id; // שמירת מזהה המוצר שנשלח
        return res.status(200).json({msg:`Deleted Product id ${pid}`});
    }
};