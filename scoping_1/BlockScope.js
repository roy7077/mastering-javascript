
/*---------------var-----------------*/
var x=20;
{
    var x=10; // -> this var x is refering to above x
    console.log(x); // 10
}

console.log(x);  // 10


/*---------------let-----------------*/
let x=20;
{
    let x=10; // creating another variable x . which is different than above x , and has a scope with in the block
    console.log(x); // 10
}

console.log(x);  // 20