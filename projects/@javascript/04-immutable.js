// function to display results
function result(msg) {
  console.log(msg);
  console.log("x:", x);
  console.log("y:", y);
}

// var x = [1, 2, 3]; // x points to an array of 3 numbers
// var y = x; // variable y points to same array of 3 numbers

// y.push(4);          // push 4 onto the array that y points to
// result('Numbers PUSH 4 to y'); // both x and y have changed

// y = [...x]              // y points to new array with elements of x
// y[0] = 42;              // change the array index 0 to value 42 that y points to
// result('assignment');   // y changed, but x did not the array is not the same
//                         // A number is primitive (strings, Booleans, null and undefined

// x = [                   // x is an array of objects with a name property
//     {name: 'Brian'},
//     {name: 'Jeannie'},
//     {name: 'Miguel'}
// ];
// y = x;                       // y points to the same array as x

// y.push({name: 'Max'});       // push a new name object on the array
// result('Push Object to y');  // both arrays have changed and include Max object

// x = [
//   {
//     name: "Brian",
//     age: "23",
//     address: { street: "jaksjdfajksdf", city: "Norman" }
//   },
//   { name: "Bob" },
//   { name: "John" }
// ];


// y = [...x]; // y is a new array with the objects added x

// y.push({name: 'Jane'});      // push Max on the array y points to
// result('Immutable');        // y changed, x is not

// y[0].name = 'Brian C.';     // change assignment
// result('Assignment');           // BOTH changed. y is a different array, but the objects are the same objects

// y[0] = Object.assign ({}, y[0], {name: 'Brian S.'});      // immutable
// y[0] = { ...y[0], name: "Brian S." }; // immutable

// const { name, age } = y[0];
// console.log(name, age);

// const foo = ({ name, address: { city }, age: a }) =>
//   console.log("xxxx", name, city, a);

// foo(y[0]);

// result("Immutable Change"); // change y array index 0 to a new object

// // Objects include
// // wrappers for primitives (rarely used directly)
// // [] or new Array(), new Object(), function () {} OR new function()
// // /\s*/ OR new RegExp ("\\s*")
// // Dates: new Date()

// // ngRx uses immutable data to indicate changes has occurred.
// // By checking if two arrays are the same
// x = [1,2,3]
// y = [...x]  // y != x  do not have to check every element of the array as the arrays are different
// z = x       // z == x not immutable, if an item was changed, goes unnoticed.

// by replacing objects with a new object in the array
// an array of n items
// did the array change
// if so iterate each item, did it change -> push a change notification
// if not no reason to check the array

// the base underlying processing for ngRx library is 140 lines of code
