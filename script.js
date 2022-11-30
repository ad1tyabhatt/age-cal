function getAge() {
  var enteredDate = document.getElementById("date").value;
  var enteredMonth = document.getElementById("month").value;
  var enteredYear = document.getElementById("year").value;
  var date = new Date();
  var setDate = date.getDate();
  var setMonth = 1 + date.getMonth();
  var setYear = date.getFullYear();
  var month = 30;
  if (enteredDate > setDate) {
      setDate = setDate + month;
      setMonth = setMonth - 1;
  }
  if (enteredMonth > setMonth) {
      setMonth = setMonth + 12;
      setYear = setYear - 1;
  }

  
  
  var finalDate = setDate - enteredDate;
  var finalMonth = setMonth - enteredMonth;
  var finalYear = setYear - enteredYear;



  document.getElementById("output").innerHTML = `Your Age is ${finalYear} Years ${finalMonth} Months ${finalDate} days`
 
}