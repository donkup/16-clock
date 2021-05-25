/*
const a = [2, 3, 1, 4, 2];
Arejuje nurodyta, kiek sekundziu reikia laukti, kol bus isspausdinta nurodyta reiksme
*/

const a = [2, 3, 1, 4, 2];
let waitingTime = 0;

for (const number of a) {
    waitingTime += number;
    setTimeout(() => {
        console.log(number);
    }, waitingTime * 1000)
}