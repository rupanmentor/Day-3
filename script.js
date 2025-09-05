// Home work
/*
1. print the numbers from 1 to 100 with the interval of 10
2. print the number from 10 to 1
3. print the multiple of 2 until 10
4. print the number from 100 to 1 with the difference of 10.
5. write a function to print the eligble, Not eligble voters separately from the list
of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.
*/

var even = [];
var odd = [];
var invalid = [];
function evenOrOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      invalid.push(arr[i]);
    } else if (arr[i] === 0) {
      invalid.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return {
    evenarray : even,
    oddarray : odd,
    invalidarray: invalid
  }
}
console.log(evenOrOdd([1, 2, 3, 4, 5, 0, -5, 6, 7, 8]));

