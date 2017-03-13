var app = angular.module('App', []);

app.controller('EmployeeListController', ['$http', function($http) {
  console.log('List Controller loaded');
  var self = this;

  self.message = 'Digital wizardry';
  self.employeeList = {};
  self.expenses = {};

  getEmployees();
  // monthlyExpense();

  self.statusChange = function(id){
    console.log(id, 'was clicked for removal');
    $http({
      type: 'DELETE',
      url: '/employees/' + id
    }).then(function(response){
      console.log(response);
      getEmployees();
    });
  } //end DELETE function

  function getEmployees() {
    $http({
      type: 'GET',
      url: '/employees'
    }).then(function(response){
      self.employeeList = response.data;
        monthlyExpense();
    });
  } //end employee list request function


  function monthlyExpense() {
    $http({
      type: 'GET',
      url: '/employees/monthly'
    }).then(function(response){
      // console.log(response.data);
      self.expenses = response.data;
    });
  } //end retreiving sum of salary

}]); // end EmployeeListController

app.controller('FormController', ['$http', function($http){
  console.log('FormController loaded');
  var self = this;
  self.newEmployee = {};

  self.addEmployee = function(){
    console.log(self.newEmployee);
    $http({
      type: 'POST',
      url: 'employees',
      data: self.newEmployee
    }).then(function(response){
      console.log(response);
    });
  }
}]); // end FormController
