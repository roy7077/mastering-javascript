Promise.resolve("foo")
.then(function p1(string){
    return "sagar"
})
.then(function p2(string){
    setTimeout(() => {
        string+="baz";
        console.log(string);
    }, 1);
})
.then(function p3(string){
    console.log(string);
})

