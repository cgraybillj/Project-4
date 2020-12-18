var express = require('express');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('account.db');
var app = express();
var port = 8000;

app.get(`/`, function(request, response){
    response.send('Stonks!');
});

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});

app.get(`/account`,function (req, res){
 db.all('SELECT * FROM Account', function(err, row){
    if(err){
        console.log(err.message);
    }
    else{
        res.json(row);
    }
});
});