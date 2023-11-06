/*---------Promises-----------*/
/*
  (i)   Readability Enhances
  (ii)  They can solve the problem of IOC
  (iii) In js, promises are special types of object that get
        returned immediately when we call them.
  (iv)  promises acts as a placeholder for the data we hope.
        to get back sometime in future.
  (v)   In those promise objects we can attach the functionality
        we want to execute once the future task is done.
*/

/* 
How to create a promise ?
_______________________
 - creation of a promise object is sync in nature.
 State
 _____
 (i) Pending :- when we create a new promise object
                this is the default state. it represents
                work in progress.
                value - undefined

 (ii) Fulfilled:-if the operation is completed successfully
                 value - defined

 (iii)Rejected :-if operation was not successful
                 value - defined

  
How to consume a promise ?
*/
 
//Example - 1
function createPromiseLoop(){
      return new Promise(function executor(resolve,reject){
            for(let i=0;i<1000000000;i++){}

            let num=Math.random() * 10;;
            if(num%2==0){
                  //if num is even we fullfill
                  resolve(num);
            }
            else{
                  //if num is odd we reject
                  reject(num);
            }
      })
}

//it will wait for for loop to execute
let x=createPromiseLoop();
console.log(x);


//Example - 2
function createPromiseTimeout(){
      return new Promise(function executor(resolve,reject){
            setTimeout(function(){
                  let num=Math.random() * 10;;
                  if(num%2==0){
                        //if num is even we fullfill
                        resolve(num);
                  }
                  else{
                        //if num is odd we reject
                        reject(num);
                  }
            },10000);
      });
};

let y=createPromiseTimeout();
console.log(y);
/* initialy it will in pending state and value will be undefined
   after timeout it will go into resolve or rejected state
*/

//Example - 3
function createPromiseExample3(){
      return new Promise(function executor(resolve,reject){
            let num=Math.random() * 10;;
            if(num%2==0){
                  //if num is even we fullfill
                  console(num);
                  return ;
                  resolve(num);
            }
            else{
                  //if num is odd we reject
                  console(num);
                  return ;
                  reject(num);
            }
      })
}

//it will wait for for loop to execute
let k=createPromiseExample3();
console.log(k);
//output =>
// num
// pending

/* because it will go into reject or fullfill state
   when resolve or reject line execute
*/


//Example - 4
function createPromiseExample4(){
      return new Promise(function executor(resolve,reject){
            let num=Math.random() * 10;;
            if(num%2==0){
                  //if num is even we fullfill
                  resolve(num);
                  console.log("completed")
            }
            else{
                  //if num is odd we reject
                  reject(num);
                  console.log("completed")
            }
      })
}

//it will wait for for loop to execute
let l=createPromiseExample4();
console.log(l);
//output =>
// fullfill or reject
// completed
