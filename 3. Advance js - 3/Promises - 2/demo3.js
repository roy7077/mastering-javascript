function blocking_for_loop(){
    for(let i=0;i<100000000;i++){
        //something
    }
};

console.log("Start of the file");

setTimeout(() => {
    console.log("Timer 1 done");
}, 0);

blocking_for_loop();
let x=Promise.resolve("Sagar's promise1");
x.then((value)=>{
    console.log("whose promise ? ",value);
    blocking_for_loop();
});

let y=Promise.resolve("Sagar's promise2");
y.then((value)=>{
    console.log("Whose promise ? ",value);
    setTimeout(()=>{
        console.log("ok done");
    },0);
});

let z=Promise.resolve("Sagar's promise3");
z.then((value)=>{
    console.log("Whose promise ? ",value);
});

setTimeout(()=>{
    console.log("Timer 2 done");
},0);

console.log("End of the file");


//calback -> timer1 , timer2 , ok done
//microtask-> promise1 ,promise2 , promise3

/*-----output-----*/
// Start of the file
// End of the file
// whose promise ?  Sagar's promise1   
// Whose promise ?  Sagar's promise2   
// Whose promise ?  Sagar's promise3   
// Timer 1 done
// Timer 2 done
// ok done