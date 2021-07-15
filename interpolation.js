"use strict";

const category = 'toys';

console.log('http://url/' + category + '/' + '4' );

console.log(`http://url/${category}/4`);  //using interpolation

const user = 'Ivan';

alert (`Hi, ${user}`);

let incr = 10,
    decr= 10;

//  ++incr; спершу додаємо потім виводимо
//  --decr; спершу віднімаємо потім виводимо
 
 console.log(incr++);
 console.log(decr--);
 console.log(incr);
 console.log(decr);

 console.log(5%2);//остача від ділення

 console.log(2*4 === 8);//перевірка і типу і значення