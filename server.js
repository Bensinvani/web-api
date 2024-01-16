const http = require('http'); // קישור לספריית http
const app = require('./app');
const srv = http.createServer(app);// יצירת שרת אינטרנט
const port = 3030; // יצירת פורט
srv.listen(port,()=>{ // הפעלת השרת כך שיאזין לבקשות
    console.log('Server On Air');
});



