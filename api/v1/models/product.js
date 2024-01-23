const mongoose = require('mongoose') ; // חיבור לספריית העבודה מול מונגו

// נגדיר סכמה עבור מוצר
const productSchema = new mongoose.Schema(
    {
        pid:Number,
        pname:String,
        price:Number,
        picname:String
    });

// ניצור מודל עבור מוצר
module.exports = mongoose.model('products' , productSchema);

