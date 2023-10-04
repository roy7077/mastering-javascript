var teacher="sagar"; // global scope
// let content="c"
function fun(){     // global scope
    console.log(teacher); // undefined
    console.log(content); // reference error

    var teacher="ray"; // function scope
    let content="JS";  // block scope
    if(content=="JS"){
        let hours="120+"; // block scope
        console.log(teacher,hours); // ray 120+
    }
    console.log(teacher,content); // ray JS 
}

fun();
console.log(teacher); // sagar 
console.log(content); // reference error

/* let - block scope
   var - function scope

   Redecleration is not allowed in let
   let a=10;
   let a=20; ❌ not allowed

   Redecleration is allowed in var
   var a=10;
   var a=20; ✅ not allowed
*/

/* Temporal Dead Zone
   __________________

  So, if the let and const are also hoisted, 
  why is it that they cannot be accessed before 
  their declaration? The answer to this lies within 
  the concept of the Temporal Dead Zone (TDZ).

  Variables declared using let and the constants declared 
  using const are hoisted but are in a TDZ. This prevents 
  them from being accessed before their declaration has 
  actually been executed during the step-by-step execution 
  of the code.

  Temporal Dead Zone is the period of time during which the 
  let and const declarations cannot be accessed.

  Temporal Dead Zone starts when the code execution enters the 
  block which contains the let or const declaration and continues 
  until the declaration has executed.
*/