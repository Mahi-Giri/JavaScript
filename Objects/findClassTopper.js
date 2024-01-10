const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
};

function findClassTopper(studentMarks) {
    let studentAverages = {};

    for (let student in studentMarks) {
        let sum = studentMarks[student].reduce((acc, val) => acc + val, 0);
        let average = sum / studentMarks[student].length;
        studentAverages[student] = average;
    }

    let maxAverage = -Infinity;
    let topper = '';

    for (let student in studentAverages) {
        if (studentAverages[student] > maxAverage) {
            maxAverage = studentAverages[student];
            topper = student;
        }
    }

    return topper;
}

console.log(findClassTopper(studentMarks));
