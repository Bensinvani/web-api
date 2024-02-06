const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    try{
        // נשלוף את ההדר של האבטחה שנקרא אוזריזשיין
        const authHeader = req.headers.authorization;
        // "bearer ahnfjkashf"
        const arr = authHeader.split(' '); // יצירת מערך מחרוזות מתוך המחרוזת של האוטורזיישן 
        const token = arr[1]; // שמירת הטוקן בתוך משתנה 
        const user = jwt.verify(token,process.env.PRIVATE_KEY); // ביצענו בדיקת תקינות לטוקן,במידה ותקין,נקבל את הערך המוצפן
        req.user = user; // הוספת שדה משלנו לבקשה ובתוכו פרטי המשתמש
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({msg:"You Are Not autorized"}); // החזרת תשובה למשתמש שאינו מורשה גישה למקום זה
    }
};