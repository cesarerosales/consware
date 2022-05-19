const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const tasksRoutes = require('./routes/tasks');


const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
  host: 'database-1.c82x4pqn2wgd.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'p4ssw0rd',
  port: 3306,
  database: 'nodejs_app'
}, 'single'));

app.listen(app.get('port'), () => {
  console.log('Listening on port ', app.get('port'));
});

app.use('/', tasksRoutes)

app.use('/', tasksRoutes);

app.get('/', (req, res) => {
  res.render('home');
});