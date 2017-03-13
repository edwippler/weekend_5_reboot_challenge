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
  // console.log('hit get route in employees.js');
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
          // console.log(result.rows);
          res.send(result.rows);
        }
      });
    }
  });
});

router.get('/monthly', function(req, res){
  // console.log('hit get route in employees.js');
  pool.connect(function(err, client, done){
    if (err) {
      console.log('error connecting to db', err);
      res.sendStatus(500);
    }else {
      //SELECT SUM(annual_salary) from employees;
      client.query('SELECT SUM(annual_salary) from employees;', function(err, result){
        done();
        if (err){
          console.log('error making query');
          res.sendStatus(502)
        }else {
          // console.log(result.rows);
          res.send(result.rows);
        }
      });
    }
  });
});

router.delete('/:id', function(req, res){
  console.log('hit delete route');
  var employeeToDelete = req.params.id;
  pool.connect(function(err, client, done){
    if (err) {
      console.log('error connecting to db', err);
      res.sendStatus(500);
    }else {
      //DELETE FROM employees WHERE id = 6;
      client.query('DELETE FROM employees WHERE id = $1 ;', [employeeToDelete], function(err, result){
        done();
        if (err){
          console.log('error making query');
          res.sendStatus(502)
        }else {
          // console.log(result.rows);
          res.sendStatus(202);
        }
      });
    }
  });
});

module.exports = router;
