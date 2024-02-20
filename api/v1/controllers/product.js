const mysql = require('mysql'); // חיבור למודל של mysql
module.exports = {
    GetAllProducts:(req,res)=>{ // הגדרת נקודת קצה עבור שליפה של כל המוצרים
        const conn = global.db; // שליפת הקונקשן מתוך הזכרון הגלובלי
        conn.query('SELECT * FROM t_products', (error,results,fields) =>{
            if(error)
            {
                return res.status(500).json(error);
            }
            else
            {
                return res.status(200).json(results);
            }
        });
    },
    GetProductById:(req,res)=>{ // נקודת קצה עבור שליפת מוצר לפי מזהה מוצר
        const conn = global.db;
        let pid = req.params.id;
        conn.query('SELECT * FROM t_products WHERE pid=?',pid,(error,results,fields)=>{
            if(error)
            {
                return res.status(500).json(error);
            }
            else
            {
                return res.status(200).json(results);
            }
        });
    },
    RemoveProductById:(req,res)=>{ 
        const conn = global.db;
        let pid = req.params.id; 
        conn.query('DELETE FROM t_products WHERE pid=?',pid,(error,results,fields)=>{
            if(error)
            {
                return res.status(500).json(error);
            }
            else
            {
                return res.status(200).json(results);
            }
        });
    },
    AddProduct:(req,res) =>{
        const conn = global.db;
        const {price,pname,picname,pdesc}  = req.body;
        conn.query('INSERT INTO t_products (price,pname,picname,pdesc) values(?,?,?,?)',[price,pname,picname,pdesc] ,(error,results,fields)=>{
            if(error)
            {
                return res.status(500).json(error);
            }
            else
            {
                return res.status(200).json(results);
            }
        });
    },
    UpdateProduct: (req,res)=>{ // נקודת קצה עבור עדכון מוצר לפי מזהה מוצר
        let pid =req.params.id;
        const {price,pname,picname,pdesc} = req.body; // שמירת מזהה המוצר שנשלח
        const conn = global.db;
        conn.query('UPDATE t_products set price=?,pname=?, picname=?, pdesc=? WHERE pid=?',[price,pname,picname,pdesc,pid],(error,results,fields)=>{
            if(error)
            {
                return res.status(500).json(error);
            }
            else
            {
                return res.status(200).json(results);
            }
        });
    }
};

