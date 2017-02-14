var cumulatveSalary = 0;
$(document).ready(function(){
  $('#submit').on('click', function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();


    // adds items to the lists
    $('#listedFirstName').append('<li>' + firstName + '</li>');
    $('#listedLastName').append('<li>' + lastName + '</li>');
    $('#listedID').append('<li>' + idNumber + '</li>');
    $('#listedJob').append('<li>' + jobTitle + '</li>');
    $('#listedSalary').append('<li>' + annualSalary + " " +
    '<button class="deleteButton">Delete</button></li>');

    // add submitted salary for a cumulative salary - got stuck on setting container for dynamic content.
    // var salaryArray = $(this).closest('body').find('#listedSalary > li').val();
    // var salaryArray = [];

    annualSalary = Number(annualSalary);
    cumulatveSalary += annualSalary;
    var expenseTotal = cumulatveSalary / 12;
    expenseTotal = expenseTotal.toFixed(2);
    $('#monthlyExpense').text(expenseTotal);

});

  $('#entryFields').on('click', ':button', function () {
    $('input').val('');
  })

// remove line from all lists
  $('#nameContainer').on('click', '.deleteButton', function(){
    var currentExpense = $('#nameContainer').val();
    var updatedExpense = parseFloat(currentExpense) - removedSalary;
    updatedExpense = updatedExpense.toFixed(2);
    console.log(updatedExpense);
    $('#monthlyExpense').text(updatedExpense);

    $(this).parent().remove();

    // $(this).find('#listedFirstName').child().remove();

  });
});
