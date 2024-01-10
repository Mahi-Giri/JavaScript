// function x() {
//     let a = 5;

//     // If we put return keyword infront of function means we are tying to returning hole function
//     return function y() {
//         console.log(a);
//     }
//     // for returning functions  you can use this also
//     // return y;

// }
// let z = x();
// console.log(z);
// z();


// function start() {
//     let name = "Mahesh";
//     function displayName() {
//         console.log(name);
//     }
//     name = "Mahi";
//     return displayName;
// }

// let result = start();
// result();


function returnFun() {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);

            }
            z();
        }
        a = 10;
        y();
    }
    return x;
}
let a = returnFun();
console.log(a());