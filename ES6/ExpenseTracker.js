function main() {
    class ExpenseTracker {
        #income;
        #expenses;

        constructor(income) {
            this.#income = income;
            this.#expenses = [];
        }

        calculateTotalExpenses() {
            return this.#expenses.reduce((total, current) => {
                return total + current.amount;
            }, 0);
        }


        addExpense(name, amount, date) {
            const expense = { name, amount, date };
            this.#expenses.push(expense);
        }

        calculateBalance() {
            const totalExpenses = this.calculateTotalExpenses();
            return this.#income - totalExpenses;
        }
    }

    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance());

    return ExpenseTracker;
}

main();