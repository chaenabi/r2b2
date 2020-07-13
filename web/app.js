const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const port = 5000
//const mysql = require('mysql')
//const db = require('./config/database.js')
//const connection = mysql.createConnection(db)
app.set('views', `${__dirname}/public`)
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.use(express.static('public', { extensions: ['html'] }))
//const router = require('./router/main')(app, connection)


// added settings for the test of providing json by chaenabi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// cors 
app.use(function (req, res, next) { // 1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type');
  next();
});

app.get('/r2d2_module_data', (req, res) => {
    return res.json(data);
});

const data = [
    {
        DHT11_Temp: 32,
        DHT11_Humi: 70,
        PMS7003_PM10: 12,
        PMS7003_PM25: 87,
    }
];

app.listen(port, err => {
    if (err) {
        console.log('Something went wrong!', err);
    } else {
        console.log(`R2D2 server is running on port ${port}`)
    }
})