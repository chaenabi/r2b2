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

/**
 *   @date    : 2020-07-18 Sat
 *   @author  : Androino Study Group, Lee MC
 *   @content :                     
 *               [전체 데이터 api 목록]       변수명
 *               1. 온습도(DH11)          - temperature/humidity
 *               2. 미세먼지(PMS 7003)    - particualte_matter
 *               3. 초음파센서             - 구분값 불명
 *               4. 배터리현황             - battery
 *               5. 위치                 - region
 *               6. r2d2 기기 식별변호구분  - id
 *
 *             [구현 필요 목록] 
 *             ----- 긴급 -----
 *              1. 미세먼지(PMS 7003)     :  pm1.0(구분: 초미세먼지,  색상: 빨강,    변수명: particulate_matter1)
 *                                         pm2.5(구분: 초미세먼지,  색상: 노랑,    변수명: particulate_matter2)
 *                                         pm10(구분:   미세먼지,  색상: 파랑,    변수명: particulate_matter3) 
 *                                         웹화면 출력
 *                                         
 *              2. 초음파센서              : 거리 데이터 ui 웹화면 출력
 *              3. r2d2                 : 식별번호 구분 웹화면 출력
 *              4. 공기 청정 여부(boolean) : 시작/완료 (서버에도 결과 송신?)
 *              5. 배터리 현황 (전력 측정)  : 웹화면 출력
 *
 *              ----- 보통 -----
 *              1. 정부 미세먼지 api를 가져와서 비교해주는 기능  
 *              2. 방위치 (RFID?)
 *               
 */






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