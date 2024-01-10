let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;

function deleteOccur(arr, ele) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ele) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(deleteOccur(arr, ele));
// Output: [23, 4, 78, 5, 63, 45, 210]
