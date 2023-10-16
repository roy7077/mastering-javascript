/*
 (i) JS is sync in nature
 (ii)JS is single threaded

 ** If we execute valid ecmascript code
    via given by standards**
*/

/*-----For loop example-------*/
console.log("starting loop")
for(let i=0;i<=10000000000;i++)
{
    //some tasks
}
console.log("END the loop")

/* javascript is sync in nature .
   it will stay at that line .
   untill not executed.

   in this example for loop is taking time
   and it will print "END the loop" after 
   for loop
*/