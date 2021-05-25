
/*
const a = [2, 3, 1, 4, 2];
Karta i sekunde isspausdinti po reiksme
*/

const a = [2, 3, 1, 4, 2];
let i = 0;

const timer = setInterval(() => {
    const number = a[i++];
    if (typeof number === 'number') {
        console.log(number);
    } else {
        clearInterval(timer);
    }
}, 1000)