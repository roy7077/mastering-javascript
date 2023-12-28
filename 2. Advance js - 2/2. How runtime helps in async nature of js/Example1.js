
function timeConsumingByLoop(){
    console.log("Loop starts")
    for(let i=0;i<=1000000000;i++){
        //some task
    }
    console.log("loop ends");
}

function timeConsumingByRunTimeFeature(){
    console.log("start timer");
    setTimeout(function(){
        console.log("completed timer");
    },5000)
}

console.log("hii");
timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();
console.log("bye");

/* output
   ______
   
    hii
    Loop starts
    loop ends
    start timer
    Loop starts
    loop ends
    bye
    completed timer
*/

/*
 Stack: This is where all your javascript code gets pushed and executed 
 one by one as the interpreter reads your program, and gets popped out 
 once the execution is done. If your statement is asynchronous: setTimeout,
 ajax(), promise, or click event, then that code gets forwarded to Event table, 
 this table is responsible for moving your asynchronous code to callback/event 
 queue after specified time.

 Heap: This is where all the memory allocation happens for your variables, 
 that you have defined in your program.

 Callback Queue: This is where your asynchronous code gets pushed to, and 
 waits for the execution.

 Event Loop: Then comes the Event Loop, which keeps running continuously and 
 checks the Main stack, if it has any frames to execute, if not then it checks 
 Callback queue, if Callback queue has codes to execute then it pops the message 
 from it to the Main Stack for the execution.

 Job Queue: Apart from Callback Queue, browsers have introduced one more queue 
 which is “Job Queue”, reserved only for new Promise() functionality. So when 
 you use promises in your code, you add .then() method, which is a callback method. 
 These `thenable` methods are added to Job Queue once the promise has returned/resolved, 
 and then gets executed.
*/