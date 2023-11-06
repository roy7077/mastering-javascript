console.log("start of the file");

setTimeout(() => {
    console.log("timer 1 dome");
}, 0);

for(let i=0;i<1000000000;i++){
    //something
}

// its giving the fullfill promise
let x=Promise.resolve("sagar's promise");
x.then((value)=>{
   console.log("Whose promise ? ",value);
});

setTimeout(() => {
    console.log("timer 2 done");
}, 0);

console.log("End of the file");

/*-----output-----*/
// start of the file
// End of the file
// Whose promise ?  sagar's promise    
// timer 1 dome
// timer 2 doneh
