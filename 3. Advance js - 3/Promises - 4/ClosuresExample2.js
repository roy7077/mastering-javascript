function process(){
    let i=0;
    function inner1(){
        i+=1;
        return i;
    }

    function inner2(){
        i+=1;
        return i;
    }
    return {inner1,inner2};
}

let x=process();

/* both inner1 and inner2's scopes -> closures
   has the reference of the same i
*/