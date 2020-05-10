var express = require('express');
var app = express();
var session = require('express-session');
var connectionController = require('./routes/connectionController.js');

app.use('/assets',express.static('assets'));
app.set('view engine','ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seminar', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(session({
    secret : 'login-session',
    resave : false,
    saveUninitialized : true
  })) 

app.use('/',connectionController);

app.listen(process.env.PORT || 8080);