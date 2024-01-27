const mongoose = require('mongoose') ; // חיבור לספריית העבודה מול מונגו

// נגדיר סכמה עבור מוצר
const usersSchema = new mongoose.Schema(
    {
        phone:Number,
        fullname:String,
        pass:Number,
        email:String,
        userid:Number
    });

// ניצור מודל עבור מוצר
module.exports = mongoose.model('users' , usersSchema);

