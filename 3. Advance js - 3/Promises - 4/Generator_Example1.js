function* fetchNextElement(array){
    for(let i=0;i<array.length;i++){
        yield i;
    }
}

let x=fetchNextElement([1,2,3,4,5]);
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());