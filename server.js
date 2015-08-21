var express = require('express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname, 'app/'));
