const blackboxVendorCodeSync = f => {
  f();
};

const blackboxVendorCodeAsync = ( f, delay = 1000) => {
  setTimeout(() => f(), delay);
};

// for (var i = 0; i < 10; i++) {
//   // console.log("in loop", i);
//   blackboxVendorCodeSync(() => console.log("Sync: ", i));
// }

// for (var i = 0; i < 10; i++) {
//   blackboxVendorCodeAsync(() => console.log("Async: ", i));
// }
/// i === 10
// i = 44;


// for (var i = 0; i < 10; i++) {
//   var k = i;
//   blackboxVendorCodeAsync(() => console.log('Async, local var: ', k));
// }
// i === 10, k === 9


// for (var i = 0; i < 10; i++) {
//   (function() {
//     var k = i;
//     blackboxVendorCodeAsync(() => console.log("closure: ", k));
//   })();
// }


// for (var i = 0; i < 10; i++) {
//   (function() {
//     var k = i;
//     blackboxVendorCodeAsync(() => console.log("random: ", k), Math.random() * 100);
//   })();
// }


// for (var i = 0; i < 10; i++) {
//   (function() {
//     var k = i;
//     setImmediate(function() {
//       console.log("immediate", k);
//     });
//   })();
// }

// Entire classification of errors can be eliminated.
// async functions may not work as expected
// program isn't sequential top down with async functions
// temporary variables to remember (i, k)
// naming is a hard CS problem (i, k)
// nested loop variables introduce problems is it Array[i], Array[k] or Array[i, k]
// is it i < Array.length or i <= Array.length
// is it i++ or ++i

// Functional Progamming alternative, reads left to right

// [...Array(10).keys()].map((item) => blackboxVendorCodeAsync(()=> console.log('FP Async:', item)));

[...Array(10).keys()].map((item) => blackboxVendorCodeAsync(()=> console.log('FP random: ', item), Math.random()*100));

// ... spread operator
// Array(10) is an array of 10 items
// .keys returns an array of the keys i.e. [0,1,2,3,4,5,6,7,8,9]
// .map will return a new array of n items (n being the same as the input array)
// (item) is the parameters, no function keyword needed
// => array function, or lambda
// the result to be returned, no return keyword required
// Using FP style reads from left to right
