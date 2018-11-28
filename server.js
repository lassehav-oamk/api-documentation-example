var express = require('express');
var app = express();
var path = require('path');
const port = 3000

app.use(express.static('static-files'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static-files/api-documentation.html'));
});

app.listen(port, () => console.log(`Api documentation example app listening on port ${port}!`))