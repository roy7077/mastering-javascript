// different implementation of same features in different runtime environment
 
// example

const x=setTimeout(function exe(){
    console.log("timer completed")
},10000);

console.log(x);
/* output in node */
//output - setTimeout object
//       - timer completed


/* output in chrome */
//output - number
//       - timer completed