const jwt = require('jsonwebtoken');
const token = jwt.sign({Email:"Bensinvani7@gmail.com"}, "Myprivatekey",{expiresIn: "1h"});
console.log(token);

const obj = jwt.verify(token, "Myprivatekey");
console.log(obj);


