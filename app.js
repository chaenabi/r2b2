const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000
const mysql = require('mysql')
const db = require('./config/database.js')
const connection = mysql.createConnection(db)
app.set('views', `${__dirname}/public`)
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.use(express.static('public', { extensions: ['html'] }))
const router = require('./router/main')(app, connection)



app.listen(port, err => {
    if (err) {
        console.log('Something went wrong!', err);
    } else {
        console.log(`R2D2 server is runnig on port ${port}`)
    }
})