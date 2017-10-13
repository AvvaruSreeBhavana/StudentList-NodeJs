var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var productRouter = require('./studentrouter');
var url = 'mongodb://localhost:27017/MyDb';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection error'));
db.on('open', function(){
console.log('Connected');
});
var app = express();
app.use('/students', productRouter);
module.exports = app;
