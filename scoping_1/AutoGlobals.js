/*
 formal decleration - declearing a variable using let , var , const
 __________________
   let x=10;
   var y=20;
   const z=30;

 informal decleration- declearing a variable with out using let , var and cosnt
 ____________________
    a=60
*/

/* Autoglobals
   ___________

   If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
*/

// example - 1
myFunction();

function myFunction() {
  carName = "Volvo";
}
//This code example will declare a global variable carName, even if the value is assigned inside a function.


// example - 2
function fun(){
    a=10;
    console.log(a); // 10
}

console.log(a); // error
fun();
console.log(a); // 10
/* in paring phase, it does not take informal decleration */