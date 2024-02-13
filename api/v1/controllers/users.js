const Users = require('../models/users'); // חיבור למודל -מבנה הנתונים המייצג את המשתמשים
const bcrypt = require('bcrypt'); // קישור לספריית ההצפנה
const jwt = require('jsonwebtoken'); // חיבור לספריית jwt
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
    },
    Register: (req,res)=>{
        const {fullname,pass,email,phone,userid} = req.body; // שליפת השדות שנשלחו בבקשה
        // נבדוק האם המשתמש כבר קיים במערכת
        Users.find({email}).then((results) =>{
            if(results.length > 0) // המשתמש קיים במערכת לא ניתן לבצע הרשמה 
            {
                return res.status(200).json({msg:"User already exists"});
            }
            // הצפנת סיסמה
            bcrypt.hash(pass,10).then((hashpass)=>{

                // שמירה בבסיס נתונים של המשתמש 
                Users.insertMany({fullname,email,phone,userid,pass:hashpass}).then((results)=>{
                    return res.status(200).json({results})
                });
            });
        });
    },
    Login: (req,res)=>{
        const {email,pass}=req.body;
        Users.find({email}).then((results)=>{
            if(results.length == 0) // במידה והמייל לא נמצא במערכת
            {
                return res.status(200).json({msg:"User Or Pass Are Worng"}); // מחזירים הודעת שגיאה
            }
            const hashpass = results[0].pass; // שליפת המחרוזת המוצפנת שהתקבלה מתוך בסיס הנתונים
            bcrypt.compare(pass,hashpass).then((status)=>{
                if(!status)
                {
                    return res.status(200).json({msg:"User Or Pass Are Worng"});
                }
                else
                {
                    const myUser = results[0];
                    const token = jwt.sign({email,pass,fullname:myUser.fullname}, process.env.PRIVATE_KEY,{expiresIn:'1h'}); // יצירת טוקן התקף לשעה ומכיל בתוכו את פרטי המשתמש מוצפנים
                    req.session.User = token;
                    return res.status(200).json({msg:"User Login successfully",token});
                }
            });
        });
    }
};