var friendAge = [26, 52, 32, 29, 30];

console.log(friendAge);

// length of array
console.log(friendAge.length);

// 1. get element by index
console.log(friendAge[3]);

// 2. set element value by index
friendAge[1] = 27;
console.log(friendAge);

//  3. find index of an element
var index = friendAge.indexOf(29);
console.log(index);

// push ** use push to add an element in array as a last element
var numbers = [45, 49, 50, 56];
numbers.push(89);
numbers.push(76);
numbers.push(77);
console.log(numbers);
console.log(numbers.length);
console.log(numbers[3]);
console.log(numbers.indexOf(89));

// pop ** to remove the last element of an array
var numPop = [12, 18, 20, 38];
console.log(numPop);
var elementPop = numPop.pop();
console.log(elementPop);
console.log(numPop);

// unshift() to add one or more elements at the starting of an array
var countries = ['bd', 'usa', 'uk'];
console.log(countries);
countries.unshift('ksa', 'qtr');
console.log(countries);

// shift() to remove one elements from begining of an array
var elementShift = countries.shift();
console.log(countries);
console.log(elementShift);