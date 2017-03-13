var app = angular.module('App', []);

app.controller('EmployeeListController', ['$http', function($http) {
  console.log('List Controller loaded');
  var self = this;

  self.message = 'Digital wizardry';

  self.employeeList = {};

  self.statusChange = function(){
    console.log('button click works');
  }

  getEmployees();

  function getEmployees() {
    $http({
      type: 'GET',
      url: '/employees'
    }).then(function(response){
      console.log('response from ajax', response.data);
      self.employeeList = response.data;
    });
  }

}]);

app.controller('FormController', function(){
  console.log('FormController loaded');
  var self = this;
  self.newEmployee = {};

  self.addEmployee = function(){
    console.log(self.newEmployee);
  }
});
