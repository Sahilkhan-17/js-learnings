const studentId = 121223  // cannot change value of Const var (Constant).
let studentName = "Sahil"
var StudentEmail = "sahil@abc.com" // avoid using var keyword, because of global scope.
studentAddress = "abc colony, abc" // in javascript it is possible to create variable without defining type (Not Recommended).

console.log(studentId);

// display values in form of table and take more than one variables.
console.table([studentName, StudentEmail, studentAddress])  
