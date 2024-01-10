// // For solution CallBack Hell we have Promises

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data : ${dataId}`);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     });
// }

// let result = getData(123);
// console.log(result);

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log(`I am Promise`);
//         resolve(`success`);
//         // reject(`error`);
//     }, 2000);
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log(`Promise resolved successfully ${res}`);
// });


// Promise Chainings
function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data: 1`);
            resolve(`success`);
        }, 2000);
    });
};
function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data: 2`);
            resolve(`success`);
        }, 2000);
    });
};

// console.log(`fetching data: 1`);
// let promise1 = async1();
// promise1.then((res) => {
//     console.log(`${res}`);
// });

// console.log(`fetching data: 2`);
// let promise2 = async2();
// promise2.then((res) => {
//     console.log(`${res}`);
// });

// // Using this we are getting data on same time 
// // For solving this type of scenario we use promises chaining

console.log(`Fetching data 1...`);
async1().then((res) => {
    console.log(`Fetching data2...`);
    async2().then((res) => { });
});



// Promise Chaining
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data: ${dataId}`);
            resolve("success");
        }, 2000);
    });
};

// // Promise Chaining
// // Normal Way

// console.log(`Getting data 1...`);
// getData(1).then((res) => {
//     console.log(res);
//     console.log(`Getting data 2...`);
//     getData(2).then((res) => {
//         console.log(res);
//         console.log(`Getting data 3...`);
//         getData(3).then((res) => {
//             console.log(res);
//         });
//     });
// });

// Programmer way
console.log(`Getting data 1...`);
getData(1).then((res) => {
    console.log(`Getting data 2...`);
    return getData(2);
}).then((res) => {
    console.log(`Getting data 3...`);
    return getData(3);
}).then((res) => {
    console.log(res);
})