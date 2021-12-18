console.log('-------------------------------------------------------');

// Creates a slice of array with n elements dropped from the end.

// Since
// 3.0.0

// Arguments
// array (Array): The array to query.
// [n=1] (number): The number of elements to drop.
// Returns
// (Array): Returns the slice of array.

var array = [1, 2, 3];

console.log(_.drop(array));
console.log(_.drop(array, 2));
console.log(_.drop(array, 5));
console.log(_.drop(array, 0));

console.log('-------------------------------------------------------');
