"use strict";

// const str = "Test";

// console.log(str.length);
// const arr = [1, 2, 4];

// console.log(arr.length);
// // length - це властивість
// console.log(str[2]);
// console.log(str[2] = 'd');// так змінити не вийде

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // =>5
console.log(fruit.indexOf("q")); // => -1

const logg = "Hello world!";

// console.log(logg.slice(6, 11)); //string.slice(indexStart, indexEnd)
// console.log(logg.slice(6));
// console.log(logg.slice(-6,-1));

console.log(logg.substring(6, 11)); // те саме що і slice практично

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));