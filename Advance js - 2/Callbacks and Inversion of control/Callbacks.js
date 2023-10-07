/*
 CallBack function
 _________________

- A JavaScript callback is a function which is to be 
  executed after another function has finished execution.

- A more formal definition would be - Any function that is 
  passed as an argument to another function so that it can be 
  executed in that other function is called as a callback function.
  
*/

function fun(x,fn){
    for(let i=1;i<x;i++){
        console.log(i);
    }
    fn();
}

fun(10,function(){
    console.log("I am executed also");
});