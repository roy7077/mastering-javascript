/**
 * Inversion of control
 * Callback hell -> (readability problem)
 */

function doTask(fn,x){
    //whole implementation is done by team A

    //fn(x*x) // calling my callback with square x
    //fn(x*x)
}

//here team B tries to use it
doTask(function(num){
    //this is inversion of control
    console.log("woah num is",num);
},9);