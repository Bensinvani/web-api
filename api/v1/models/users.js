const mongoose = require('mongoose') ; // חיבור לספריית העבודה מול מונגו

// נגדיר סכמה עבור מוצר
const usersSchema = new mongoose.Schema(
    {
        phone:String,
        fullname:String,
        pass:String,
        email:String,
        userid:Number
    });

// ניצור מודל עבור מוצר
module.exports = mongoose.model('users' , usersSchema);

