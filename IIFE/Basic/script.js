// (function (a, b) {
//     console.log("IIFE");
//     console.log(a + b);
// })(4, 5);


// const user = (function () {
//     const userData = {
//         userName: 'John',
//         userAge: 20,
//     }

//     function getName() {
//         console.log(userData.userName);
//     }

//     function updateAge(age) {
//         console.log(userData.userAge + age);
//     }

//     // Key:Value Pair
//     return { getName, updateAge };
// })();

// console.log(user);
// console.log(user.userData);

// user.getName();
// user.updateAge(3);


// function main() {
//     return (function () {
//         console.log("hello");
//     })();
// }
// const result = main();


// var x = 10;
// (function () {
//     console.log(x);
// })();

let counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount());