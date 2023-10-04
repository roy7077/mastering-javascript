
function fun(fn){
    console.log("Welcome to fun");
    fn();
}

//1st of of calling this
fun(function(){
    console.log("called by 1st methon");
})

//2nd way of calling this
fun(function testing(){
    console.log("called by 2nd method");
})

// it is more readable when we are using named function expression
/* it's also helful in recursion 
     - without name of function we cannot call a function
*/

/*
    - A stack trace is a list of the functions, in order, 
    that lead to a given point in a software program.

    - A stack trace is essentially a breadcrumb trail for your 
    software. You can easily see the stack trace in JavaScript 
    by adding the following into your code:

    console.trace();
*/

/* why should we use named function expression ?
  (i)  Readablity
  (ii) Recursion
  (iii)console.trace()    (Stack tree)
*/