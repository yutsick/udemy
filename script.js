"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a:50
};

obj.a = 20;
console.log (obj);

/* типи даних */

number  = 4.6;
console.log (-4/0);
console.log ('string' * 9);

const person = 'Alex'; 

const bool = true;

//console.log(something); 

let und;
console.log(und);
 
const man = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(man.name);
console.log(man['name']);

let arr = ['plumb.png','orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[5]);


/*user dilog*/
//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

// const answer = +prompt("Are you 18 years old?", "18");
// console.log(answer + 5);

const answers = [];

answers[0] = prompt ("What is your name?", "");
answers[1] = prompt ("What is your lastname?", "");
answers[2] = prompt ("How old are you?", "");

console.log(typeof(answers));