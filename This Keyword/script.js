let counter1 = createCounter();
let counter2 = createCounter();

function createCounter() {
    return {
        count: 0,
        increment: function () {
            this.count++;
        },
    };
};

counter1.increment();
counter1.increment();
counter2.increment();
counter2.increment();

console.log(counter1);
console.log(counter2);
