// let a = 4;
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (a === 4) {
//             resolve("200");
//         } else {
//             reject("400");
//         }
//     }, 2000);
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("I am not interested in the response");
//     });

// Track Fitness

function trackFitness(exercise, duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration > 0) {
                console.log(`Indicate the ${exercise} you performed and the ${duration}.`);
                resolve(duration);
            }
            if (duration < 0) {
                reject("Invalid duration");
            }
        }, 5000);
    });
}

trackFitness("Running", 30)
    .then((duration) => {
        console.log(`Total duration: ${duration} minutes.`);
    })
    .catch((error) => {
        console.log(`Failed to track fitness: ${error}`);
    });
