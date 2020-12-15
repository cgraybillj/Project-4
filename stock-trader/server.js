var express = require('express');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('account.db');
var app = express();
var port = 8000;

app.get(`/`, function(request, response){
    response.send('Hello, World!');
});

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});