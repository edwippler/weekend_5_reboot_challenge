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


// home base
// app.get( '/', function( req, res ){
//   // console.log( 'home base url hit' );
//   res.sendFile( path.resolve( 'server/public/views/index.html' ) );
// }); // end base url

app.use('/employees', employeesRouter);

app.listen(port, function() {
  console.log('listening on port:', port);
});
