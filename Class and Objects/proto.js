const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karan = {
    salary: 50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
};

const arjun = {
    salary: 50000,
};

karan.__proto__ = employee;
arjun.__proto__ = employee;

karan.calcTax();
arjun.calcTax();