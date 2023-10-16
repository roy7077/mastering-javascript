
function timeConsumingByLoop(){
    console.log("Loop starts")
    for(let i=0;i<=1000000000;i++){
        //some task
    }
    console.log("loop ends");
}

function timeConsumingByRunTimeFeature0(){
    console.log("start timer0");
    setTimeout(function(){
        for(let i=0;i<=1000000000;i++){
            //some task
        }
        console.log("completed timer0");
    },5000)
}

function timeConsumingByRunTimeFeature1(){
    console.log("start timer1");
    setTimeout(function(){
        console.log("completed timer1");
    },0)
}

function timeConsumingByRunTimeFeature2(){
    console.log("start timer2");
    setTimeout(function(){
        console.log("completed timer2");
    },5000)
}

console.log("hii");
timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();
console.log("bye");

/* output
   ______

    hii
    Loop starts
    loop ends
    start timer0
    start timer1
    start timer2
    Loop starts
    loop ends
    bye
    completed timer1
    completed timer0
    completed timer2
*/