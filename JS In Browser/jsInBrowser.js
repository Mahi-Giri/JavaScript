obj = {
    a: 1,
    b: 2,
    c: 3
}
// console.table(obj);

console.log("forLoopStart");
console.time("forLoop");
let a = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.timeEnd("forLoop");
console.log("++++++++++++++++++");

console.log("whileLoopStart");
console.time("whileLoop");
while (a < 5) {
    console.log(a);
    a++;
}
console.timeEnd("whileLoop");