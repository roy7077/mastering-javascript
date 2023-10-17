/**
Higher order function
_____________________

- there are function which take another function 
  as an argument are known as higher order function.
 */

// EXAMPLE - 1
  function fun(x,gun){

    console.log("x->",x);
    gun();
  }

  fun(10,function(){
    console.log("inside function gun");
  });

// EXAMPLE - 2
/*
what is sorting?
_______________

 -sorting is an arrangement of elements in a particular order
  that particular order can be increasing or decreasing or 
  any order.

 -worst algorithm for sorting is N! 
 -permutation of array
 */

const arr=[1,10,100,3,4,5,20];
arr.sort();
/* - it sorts the given array
   - expectation -> this might arrange elements in inc order
     default implementation of arr.sort() is going to sort my array
     in lexicographical order
*/
console.log(arr);


// sort in inc order
let b=[10,100,2000,3,4,5];
b.sort(function(a,b){
    // if a<b -> a-b will be negative -> if cmp function gives negative then a is placed before b (a<b)
    // if a>b -> a-b will be positive -> if cmp function gives positive then b is placed before a (a>b)
    return a-b;
    // sort is HOF ,, the sort function takes a comparator function as argument
});

console.log(b);