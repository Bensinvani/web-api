module.exports = {
    GetAllCategory: (req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים   
        return res.status(200).json({msg:"All Categoris"});
    },
    GetCategoryById: (req,res) =>{
        let Catid = req.params.id;
        return res.status(200).json({msg:`Get Category Id ${Catid}`});
    },
    Addcategory: (req,res) => {
        return res.status(200).json({msg:"Added New Categoris"});
    },
    UpdateCategory: (req,res) =>{
        let Catid = req.params.id;
        return res.status(200).json({msg:`Updated Category id ${Catid}`});
    },
    DeleteCategory: (req,res)=>{ // נקודת קצה עבור מחיקת מוצר לפי מזהה מוצר
        let Catid = req.params.id; // שמירת מזהה המוצר שנשלח
        return res.status(200).json({msg:`Deleted Product id ${Catid}`});
    }
};