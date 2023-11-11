/* Iterators 
   _________

-> It is the application of Closures
In JavaScript an iterator is an object which defines a 
sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the 
Iterator protocol by having a next() method that returns an object 
with two properties

value:-
The next value in the iteration sequence.

done:-
This is true if the last value in the sequence has already 
been consumed. If value is present alongside done, it is 
the iterator's return value.
*/

function fetchNextElement(array){
    let ind=0;
    function next(){
        if(ind==array.length)
        return {value:undefined,done:true};

        const ele=array[ind];
        ind++;
        return {value:ele,done:false};
    }

    return {next};
}

let obj=fetchNextElement([1,2,3,4,5]);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());