function main() {
    const array = [2, 4, 6, 2, 7, 8];

    function customMap(arr, callback) {
        const resultArray = [];
        for (let i = 0; i < arr.length; i++) {
            resultArray.push(callback(arr[i]));
        }
        return resultArray;
    }

    const squaredArray = customMap(array, function (num) {
        return num * num;
    });

    console.log(squaredArray);
    return customMap;
}
main();