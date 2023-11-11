function* fun(){
    console.log("start");
    yield 1;
    yield 2;
    console.log("hii am sagar");
    yield 3;
    yield 4;
    return 10;
    yield 5;
    yield 6;
}

let x=fun();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

/* when you will use retun then
value become undefine and done become
true for each and every line after return 
statement
*/