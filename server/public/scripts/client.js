console.log('scripts good');
var app = angular.module('App', []);

app.controller('EmployeeListController', function () {
  console.log('List Controller loaded');
  var self = this;

  self.message = 'Digital wizardry';
  self.testList = [
    {first_name:'Dave', last_name: 'Schwimmer', eidn: '100A', job_title: 'Scuba Instructor', annual_salary: 48000},
    {first_name:'Ginger', last_name: 'Vitus', eidn: '325C', job_title: 'Dentist', annual_salary: 96000},
    {first_name:'Marty', last_name: 'McFly', eidn: '1964', job_title: 'Time Travel Intern', annual_salary: 12},
    {first_name:'Doc', last_name: 'Brown', eidn: 'DL88', job_title: 'Applied Science Specialist', annual_salary: 88888}
  ];


});
