var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var ejs = require('ejs');

//for routes
var routes = require('./routes/routes');
app.set('view engine', 'ejs');

app.use('/', routes);

http.listen(3000, function() {
    console.log('listening on port 3000');
});