const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'Bensin123',
    database:'ecom'
});

connection.connect();

connection.query('SELECT * FROM t_products',function(error,results,fields){
    if(error) throw error;
    console.log('The solution is: ', results);
});