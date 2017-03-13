var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var employeesRouter = require('./routes/employees');
var port = 5000;

//middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/employees', employeesRouter);

app.listen(port, function() {
  console.log('listening on port:', port);
});
