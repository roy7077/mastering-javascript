function fun(){
    var i=1;
    while(i<10)
    {
        var x=i;
        i++;
    }
    console.log(x); // 9
}
fun();

/*-----------------------------*/
let i=1;
console.log(y);
while(i<5){
    var y=10;
    let x=5;
    i++;
}
console.log(y) // 10
console.log(x) // reference error 