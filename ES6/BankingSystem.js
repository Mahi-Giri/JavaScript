function main() {
    class Account {
        #accountNumber;
        #balance;

        constructor(accountNumber) {
            this.#accountNumber = accountNumber;
            this.#balance = 0;
        }

        get getbalance() {
            return this.#balance;
        }

        set setbalance(value) {
            if (value >= 0) {
                this.#balance = value;
            }
            else {
                console.log("Please enter a possitive value for the balance");
            }
        }

        deposit(amount) {
            this.#balance += amount;
        }

        withdraw(amount) {
            if (this.#balance >= amount) {
                this.#balance -= amount;
            }
            else {
                console.log("Insufficient balance");
            }
        }
    }

    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    return Account;
}
main();