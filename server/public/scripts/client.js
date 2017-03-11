console.log('scripts good');
var app = angular.module('App', []);

app.controller('EmployeeListController', function () {
  console.log('List Controller loaded');
  var self = this;

  self.message = 'Digital wizardry';
});
