var express = require('express');
var sqlite3 = require('sqlite3');
var cors = require('cors');
var db = new sqlite3.Database('account.db');
var app = express();
var port = 9000;

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get(`/`, function (request, response) {
    response.send('Stonks!');
});

app.listen(port, function () {
    console.log('Express app listening on port ' + port);
});

app.get(`/account`, function (req, res) {
    db.all('SELECT * FROM Acount', function (err, row) {
        if (err) {
            console.log(err.message);
        }
        else {
            res.json(row);
        }
    });
});

app.post('/account', function (req, res) {
    console.log("Bought Stonk: " + req.body.stonkTicker);
    db.run('INSERT INTO Acount VALUES (?, ?, ?)', [req.body.stonkTicker, req.body.numShares, req.body.purchasePrice], function (err) {
        if (err) {
            console.log(err.message);
        }
        else {
            res.send('Bought Stock with id: ' + this.lastID);
        }
    });
});

app.delete('/account', function (req, res) {
    db.run('DELETE FROM Acount WHERE stonkTicker = ?', [req.body.stonkTicker], function (err) {
        if (err) {
            console.log(err.message);
        }
        else {
            res.send('Delete Request called... delete:' + req.body.stonkTicker)
        }
    });
});