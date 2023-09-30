/*
 Lexical vs Dynamic Scoping-
 ____________________________

   - In Lexical(Static) Scoping, the structure of the program source code determines what variables you are referring to.
   - In Dynamic Scoping, the runtime state of the program stack determines what variable you are referring to.
   - Lexical scoping refers to the variables in the location of a function's definition, whereas dynamic scoping refers to the variables in the location of a function's invocation.

    Let's understand with the help of an example.
*/

var i = 0;
function a() { 
    console.log(i);
}

function b() {
    var i = 1;
    a();
}
b(); 

/* according to lexical scope - // output -> 0 
   according to dynamic scope - // output -> 1
*/

/*
 We have two function, "a" and "b". "a" logs out the value of "i" which is set globally to 0. 
 "b" sets its value to 1, and calls "a". If we call "b", it will log out 0. This is because. 
 while a doesn't have a variable called "i" — "a" has access to the enclosing scope where 
 the function is defined. And in the global scope, we have an "i" which is set to 0. 
 This is called lexical scoping.

 In dynamic scoping, the value of "i" will be 1. This is because instead of looking at where the 
 function is defined, it looks at where it is called from. It sees from the call stack that 
 it has been called from "b", which sets the value of "i" to be 1.
*/