if(false){
    var x=10;
}
console.log(x); // work ✅

function fun(){
    console.log(y); // y is accessible here
    var y=10;       // not accessible outside of this function
}

function gun(){
    console.log(z); // not accessible here (no hoisiting for let)
    let z=10;
}

console.log(y) // does not work ❌ 
/* if var is in block scope then it will be accessible
   with in and outside the block or you can say that it 
   will become global scope 

   if var is in function (function scope) then it will be
   accessible within the function only 
*/

