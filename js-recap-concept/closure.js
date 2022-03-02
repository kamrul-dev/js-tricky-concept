// Closure
/* const bank = owner =>{
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
}
const myBank = bank('Kamrul');
console.log(myBank(100));
console.log(myBank(300));
console.log(myBank(50));

// console.log(myBank.balance); // Not able to access balance when apply closure
console.log(myBank(200)); */


const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            // balance = balance + amount;
            balance -= amount;
            return balance;
        }
    }
}
const myBank = bank('Kamrul');
console.log(myBank.deposit(100));  // deposit banlance
console.log(myBank.deposit(300));
console.log(myBank.balance); 
console.log(myBank.deposit(50));

console.log(myBank.withdraw(100)); // withdraw balance
console.log(myBank.withdraw(200));
