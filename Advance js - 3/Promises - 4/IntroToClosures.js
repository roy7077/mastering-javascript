function process(){
    let i=0;
    let j=[1,2,3];
    let k=10;
    function inner(){
        i+=1;
        console.log(j);
        return i;
    }
    return inner;
}

let x=process();
console.log(x());
console.log(x());

let obj={func:x};
/* there is property inside this function
which is Scopes which contains the refernces
to the variables that will be using inside
inner function
*/