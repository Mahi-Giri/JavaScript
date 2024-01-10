// const marks = [85, 97, 44, 37, 76, 60];
// let sum = 0

// for (const element of marks) {
//     sum += element;
// }

// const avg = sum / marks.length;
// console.log(avg);

const itemPrice = [250, 645, 300, 900, 50];
const offerApply = [];
for (let element of itemPrice) {
    const offer = element / 10;
    element -= offer
    offerApply.push(element);
}
console.log(offerApply);