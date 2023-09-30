
function fun(){ // fun -> global scope
    var x=10;   // c -> fun scope

    function gun(){ // gun -> fun scope
        var y=20;   // y -> gun scope
        console.log(x); // 10
        console.log(y); // 20
    }

    gun();
    console.log(x); // 10
    console.log(y); // error
}

fun();

/*
 https://mazurov.github.io/eslevels-demo/

 go to this website for better understaning
 of scopes
*/