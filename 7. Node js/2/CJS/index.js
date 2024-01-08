// const sorting=require('./sorting'); //1st way to import modules - export complete object
// const {bubbleSort, selectionSort, insertionSort} = require('./sorting'); 2nd way - destructring
const {bubbleSort : bs, selectionSort : ss , insertionSort : is} = require('./sorting'); // 3rd way - alias

// const arr=sorting.bubbleSort([1,5,4,3,5]);
// const arr=bubbleSort([2,3,2,1,4]);
const arr=bs([2,3,2,1,4]);
console.log(arr);