"use strict";

const num = 51; 

switch (num) { //Тільки строге порівняння, тобто ===
    case 49: 
        console.log('False');
        break;
    case 100:
        console.log ('False');
        break;
    case 50:
        console.log ('True');
        break;
    default: //виконається, якщо жоден з кейсів не пройшов
        console.log('Stop IT!');
        break;
}