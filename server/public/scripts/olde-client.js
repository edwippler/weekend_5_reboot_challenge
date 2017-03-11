$(document).ready(function(){//waits for DOM to completely load
  $('form').on('submit', function(event){ // event listener on form submission.
    event.preventDefault(); //stops from changing to a new page.

    // create an array of the inputs - the inputs are converted to objects.
    console.log('form values: ', $(this).serializeArray());

    var submissionArray = $(this).serializeArray();
    var newEmployeeObjet = {}; // [firstName: 'Luke', lastName: 'Schlangen']

    submissionArray.forEach(function(inputField){
      // newEmployeeObjet is {}
      newEmployeeObjet[inputField.name] = inputField.value;
      // newEmployeeObjet.firstName = luke;
      // newEmployeeObjet is {firstName: 'Luke'}
      // 2nd time through newEmployeeObjet is {firstName: 'Luke', lastName: 'Schlangen'}
    });
    console.log(newEmployeeObjet);



    // add new employee row to the DOM
    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + newEmployeeObjet.firstName + '</td>' +
      '<td>' + newEmployeeObjet.lastName + '</td>' +
      '<td>' + newEmployeeObjet.idNumber + '</td>' +
      '<td>' + newEmployeeObjet.jobTitle + '</td>' +
      '<td>' + newEmployeeObjet.annualSalary + '</td>' +
      '<td><button class="deleteEmployeeButton" data-salary="' + newEmployeeObjet.annualSalary + '">Delete '+ newEmployeeObjet.firstName + '</button></td>' +
      '</tr>'
    );
    // add monthly salary expenses to the DOM
    var newEmployeeMonthlyExpenses = newEmployeeObjet.annualSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    // clear our input boxes
    $('.employeeFormInput').val('');

  });

  // adding event listener for clicking delete button
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    //removing employee salary from total.
    var deletedEmployeeSalary = $(this).data('salary');
    var deletedEmployeeMonthlySalary = deletedEmployeeSalary / 12
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var updatedMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlySalary; //does not need parseFloat because of type coercion.
    $('#monthlyExpenses').text(updatedMonthlyExpenses);
    //  seleting and deleting employee row from table.
    $(this).closest('tr').remove();

  })
});
