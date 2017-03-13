var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

router.get('/', function(req, res){
  console.log('hit get route in employees.js');
  pool.connect(function(err, client, done){
    if (err) {
      console.log('error connecting to db', err);
      res.sendStatus(500);
    }else {
      //SELECT * from employees;
      client.query('SELECT * from employees;', function(err, result){
        done();
        if (err){
          console.log('error making query');
          res.sendStatus(502)
        }else {
          console.log(result.rows);
          res.send(result.rows);
        }
      });
    }
  });
});

module.exports = router;
