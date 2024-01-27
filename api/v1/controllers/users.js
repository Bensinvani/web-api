const Users = require('../models/users'); // חיבור למודל של המוצרים
module.exports = {
    GetAllUsers:(req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים
        Users.find().then((data) =>{
            return res.status(200).json(data);
        });
    },
    GetUsersById:(req,res)=>{ // נקודת קצה עבור שליפת מוצר לפי מזהה מוצר
        
        let Usersid = req.params.id; // שמירת מזהה המוצר שנשלח
        Users.findOne({Usersid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    RemoveUsersById:(req,res)=>{ 
        
        let Usersid = req.params.id; 
        Users.deleteOne({Usersid}).then((data) =>{
            return res.status(200).json(data);
        });
    },
    AddUsers:(req,res) =>{
        let body = req.body;
        Users.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    UpdateUsers: (req,res)=>{ // נקודת קצה עבור עדכון מוצר לפי מזהה מוצר
        let Usersid =req.params.id;
        let body = req.body; // שמירת מזהה המוצר שנשלח
        Users.updateOne({Usersid},body).then((data)=>{
            return res.status(200).json(data);
        });
    }
};