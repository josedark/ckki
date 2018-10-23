var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var session = require('express-session')
const PORT = process.env.PORT || 8080


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app= express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(session({
              secret: 'hola',
              resave: true,
              saveUninitialized: true
              
              }));
app.use('/', indexRouter);
app.use('/users', usersRouter)


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


module.exports = app;