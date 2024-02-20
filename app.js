require('dotenv').config(); // טעינת קובץ ההגדרות למערכת

const mongoose = require('mongoose') ; // חיבור לספריית העבודה מול מונגו
mongoose.pluralize(null);

const jwt = require('jsonwebtoken'); // קישור לספרייה '
const session = require('express-session');
const MongoStore = require('connect-mongo');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost', // שם השרת
  user     : 'root', // שם המשתמש 
  password : 'Bensin123', // סיסמה 
  database : 'ecom' // שם בסיס הנתונים
});
 
connection.connect(()=>{
    console.log('connected to MySql');
});
global.db = connection // יצירת משתנה גלובלי בשם דיבי שמחזיק את הקונקשן


const express = require('express'); // קישור לספריית אקספרס
const app = express(); // יצירת יישום, מימוש של הספריה
const productRouter = require('./api/v1/routes/product');
const CategoryRouter = require('./api/v1/routes/category');
const usersRouter = require('./api/v1/routes/users');

const morgan = require('morgan'); // קישור לספרייה של מורגן 
const auth = require('./auth');

const ConnStr = process.env.MONGO_CONN; // שליפת מחרוזת ההתחברות מתוך הגדרות המערכת

mongoose.connect(ConnStr + 'Ecom').then((status) =>{
    if(status)
    {
        console.log('Connected To Mongo Db');
    }
    else
    {
        console.log('Not Connected');
    }
});
 
app.use(morgan('dev')); // הוספת שכבה שמבצעת לוג לכל הבקשות שהתקבלו 


app.use(express.json()); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד ג'ייסון
app.use(express.urlencoded({extended:true})); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד urluncoded
const twentyMin = 1000 * 60 * 20;
app.use(session({
    secret:'bensinvani2024',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:twentyMin},
    store:MongoStore.create({
        mongoUrl:ConnStr + 'SessionDb'
    })
}));



//app.use('/product',auth,productRouter); // קישור הראוטר אל האפליקציה
app.use('/product',productRouter); // קישור הראוטר אל האפליקציה
app.use('/category',CategoryRouter); // קישור הראוטר של קטגוריות
app.use('/users', usersRouter);
app.all('*',(req,res)=>{ // הגדרת נקודת קצה עבור כתובת לא קיימת שגיאה 404
    return res.status(404).json({msg:"Not Found"});
});

module.exports = app;