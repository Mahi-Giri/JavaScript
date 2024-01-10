function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data : ${dataId}`);
            resolve(`success`);
        }, 2000)
    });
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

// getAllData();

// We need to call this function at least one time for invoking async function
// solution is IIFE => Immediately Invoked Function Expression

// This function we will use only one time
(async () => {
    await getData(1);
    await getData(2);
    await getData(3);
})();