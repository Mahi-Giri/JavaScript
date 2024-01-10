arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
    let newArr = new Set([...arr1, ...arr2])
    return newArr
}
console.log(mergeArray(arr1, arr2));
//Output : [1,2,4,5,7,3,6,9,0]
