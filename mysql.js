var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Bensin123',
  database : 'ecom'
});
 
connection.connect();
 
// שליפה של כל המוצרים בטבלה 
connection.query('SELECT * FROM ecom.t_products', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// // פונקציה שתשלוף מבסיס הנתונים פרטים של מוצר מסוים
// connection.query('SELECT * FROM ecom.t_products WHERE pid=1', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// // פונקציה למחיקת מוצר לפי קוד מצר שנצרוב בקוד
// connection.query('DELETE FROM ecom.t_products WHERE  pid=3', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// // פונקציה להוספת מוצר עם פרטים שנצרוב בקוד
// connection.query(`INSERT INTO t_products (pname, price, picname) VALUES ('banana', 15, 'banana.jpg')`, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// // פונקציה לעדכון מוצר עם קוד מוצר ופרטי מוצר לעדכון שיצרבו בקוד
// connection.query('UPDATE ecom.t_products SET pname=orange WHERE  pid=1', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });


 
connection.end();
