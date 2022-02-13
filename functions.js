"use strict";

const logger = function () {
  console.log('Hello');
}; // В кінці функціонального виразу завжди ставиться крапка з комою

logger();



// стрілочні функції

// function calc(a,b){
//   return (a + b);
// }

// console.log (calc(4,3));

//скорочений варіант
//const calc =  (a, b) => a + b; 

//класичний варіант містить фігурні дужки
const calc = (a, b) => {
  console.log('1');
  return a + b;
}; 