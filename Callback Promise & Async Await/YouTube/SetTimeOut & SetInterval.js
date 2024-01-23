// // SetTimeOut
// setTimeout(() => {
//     console.log('Mahi');
//     console.log('Mahi');
//     console.log('Mahi');
// }, 5000);


// SetInterval
let a = 0;
const timer = setInterval(() => {
    console.log(a);
    a++;
    if (a >= 10) {
        clearInterval(timer);
    };
}, 1000);