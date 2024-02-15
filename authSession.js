const session = require('express-session');

module.exports = (req,res,next) =>{
    try{
        if(req.session.User == undefined)
        {
            return res.status(401).json({msg:"you are not autorized"});
        }
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({msg:"You Are Not autorized"}); // החזרת תשובה למשתמש שאינו מורשה גישה למקום זה
    }
};