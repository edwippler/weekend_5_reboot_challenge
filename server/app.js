var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 5000;

//middleware
app.use(express.static('server/public'));


// home base
app.get( '/', function( req, res ){
  console.log( 'home base url hit' );
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
}); // end base url

app.listen(port, function() {
  console.log('listening on port:', port);
});
