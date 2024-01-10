// Direct Way to create object 
const student = {
    fullName: "Mahesh",
    mark: 92.6,

    // Way of creating function in object
    printMark1: function () {
        console.log(`Marks is ${this.mark}`);
    },

    printMark2() {
        console.log(`Marks is ${this.mark}`);
    },
};

