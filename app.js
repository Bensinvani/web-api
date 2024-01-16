const express = require('express'); // קישור לספריית אקספרס
const app = express(); // יצירת יישום, מימוש של הספריה
const productRouter = require('./api/v1/routes/product');
const CategoryRouter = require('./api/v1/routes/category');

app.use(express.json()); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד ג'ייסון
app.use(express.urlencoded()); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד urluncoded

app.use('/product',productRouter); // קישור הראוטר אל האפליקציה
app.use('/category',CategoryRouter); // קישור הראוטר של קטגוריות
app.all('*',(req,res)=>{ // הגדרת נקודת קצה עבור כתובת לא קיימת שגיאה 404
    return res.status(404).json({msg:"Not Found"});
});

module.exports = app;