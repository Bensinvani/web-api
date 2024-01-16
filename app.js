const express = require('express'); // קישור לספריית אקספרס
const app = express(); // יצירת יישום, מימוש של הספריה
const productRouter = require('./api/v1/routes/product');
const CategoryRouter = require('./api/v1/routes/category');
const morgan = require('morgan'); // קישור לספרייה של מורגן 
app.use(morgan('dev')); // הוספת שכבה שמבצעת לוג לכל הבקשות שהתקבלו 


app.use(express.json()); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד ג'ייסון
app.use(express.urlencoded()); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד urluncoded

app.use('/product',productRouter); // קישור הראוטר אל האפליקציה
app.use('/category',CategoryRouter); // קישור הראוטר של קטגוריות
app.all('*',(req,res)=>{ // הגדרת נקודת קצה עבור כתובת לא קיימת שגיאה 404
    return res.status(404).json({msg:"Not Found"});
});

module.exports = app;