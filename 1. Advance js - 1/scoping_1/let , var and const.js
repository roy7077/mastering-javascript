
//---------------let------------------//
/**
 * let
 * ---
 * - The let declaration declares re-assignable, block-scoped local variables, 
 * optionally initializing each to a value.
 * 
 * - there is no hoisting for let variables
 */

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1




//---------------var------------------//
/**
 * var
 * ----
 * - The var statement declares function-scoped or globally-scoped variables, optionally 
 * initializing each to a value.
 * 
 * - there is hoisting in var variables
 */

var y = 1;

if (x === 1) {
  var y = 2;     // this y is refering to the same above y

  console.log(y);
  // Expected output: 2
}

console.log(y);
// Expected output: 2




//---------------const------------------//
/**
 * const
 * ------
 * - The const declaration declares block-scoped local variables. The value of a constant can't
 *   be changed through reassignment using the assignment operator, but if a constant is an object, 
 *   its properties can be added, updated, or removed.
 */
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42