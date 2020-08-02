const route = (app, connection) => {

    app.get('/', (req, res) => {
        res.render('index', { urlAttemtd: req.url })
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.get('/api/clean', (req, res) => {
        connection.query('e', (err, rows, fields) => {
            if (err) throw err;
            res.send(rows);
        })
    });
    app.get('/api/r2d2', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        connection.query(`select * from r2d2_socket`, (err, rows, fields) => {
            if (err) throw err;
            res.send(rows);
        })
    });
    app.get('/api/clean/:id', (req, res) => {
        connection.query(`select * from r2d2_clean where idx='${req.params.id}'`, (err, rows, fields) => {
            if (err) throw err;
            res.send(rows);
        })
    });
}

module.exports = route;