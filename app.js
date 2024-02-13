require('dotenv').config(); // טעינת קובץ ההגדרות למערכת

const mongoose = require('mongoose') ; // חיבור לספריית העבודה מול מונגו
mongoose.pluralize(null);

const jwt = require('jsonwebtoken'); // קישור לספרייה '
const session = require('express-session');


const express = require('express'); // קישור לספריית אקספרס
const app = express(); // יצירת יישום, מימוש של הספריה
const productRouter = require('./api/v1/routes/product');
const CategoryRouter = require('./api/v1/routes/category');
const usersRouter = require('./api/v1/routes/users');

const morgan = require('morgan'); // קישור לספרייה של מורגן 
const auth = require('./auth');

const ConnStr = process.env.MONGO_CONN; // שליפת מחרוזת ההתחברות מתוך הגדרות המערכת

mongoose.connect(ConnStr).then((status) =>{
    if(status)
    {
        console.log('Connected To Mongo Db');
    }
    else
    {
        console.log('Not Connected');
    }
});

app.use(auth);

const arr = ['192.168.1.1','::1',"1.1.1.1"];
app.use((req,res,next) =>{
    console.log(req.ip);
    let i;
    for(i = 0; i < arr.length; i++) // עבור כל כתובות האייפי המורשות 
    {
        if(req.ip == arr[i]) // במידה וכתובת האייפי של מבקש הבקשה, נמצאה בתוך רשימת המורשים
        {
            break;
        }
        
    }
    if(i == arr.length)
    {
        return res.status(403).json({msg:'not autorized'});
    }
    else 
    {
        next();
    }
        

}); 
app.use(morgan('dev')); // הוספת שכבה שמבצעת לוג לכל הבקשות שהתקבלו 


app.use(express.json()); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד ג'ייסון
app.use(express.urlencoded({extended:true})); // הוספת שכבה שמטפלת בבקשות שכוללות בודי בקידוד urluncoded
const twentyMin = 1000 * 60 * 20;
app.use(session({
    secret:'asadad',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:twentyMin}
}));



app.use('/product',auth,productRouter); // קישור הראוטר אל האפליקציה
app.use('/category',CategoryRouter); // קישור הראוטר של קטגוריות
app.use('/users', usersRouter);
app.all('*',(req,res)=>{ // הגדרת נקודת קצה עבור כתובת לא קיימת שגיאה 404
    return res.status(404).json({msg:"Not Found"});
});

module.exports = app;