const jwt = require('jsonwebtoken');
const token = jwt.sign({Email:"Bensinvani7@gmail.com"}, "Bensin123",{expiresIn: "1h"});
console.log(token);

const obj = jwt.verify(token, "Bensin123");
console.log(obj);


