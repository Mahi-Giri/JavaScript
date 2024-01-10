function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data : ${dataId}`);
            resolve(`success`);
        }, 2000)
    });
}

// Callback Hell
getData("1", () => {
    console.log(`Getting data 2...`);
    getData("2", () => {
        console.log(`Getting data 3...`);
        getData("3", () => {
            console.log(`Getting data 4...`);
            getData("4");
        });
    });
});

// Promise Chining
getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
});

// Async & Await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}