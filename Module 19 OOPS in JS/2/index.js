//  Implement a Bank Account
//Create a constructor function named BankAccount that initializes a bank account with an initial balance.Include methods for depositing and
//withdrawing money from the account. Write code to demonstrate these operations on a bank account object.

function BankAccount(initialBalance){
    this.balance = initialBalance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    console.log(`Deposited Rs.${amount}. New Balance: Rs.{this.balance}`);
};

BankAccount.prototype.withdraw = function(amount){
    if(amount > this.balance){
        console.log("Insufficient funds!");
    }else{
        this.balance -= amount;
        console.log(`Withdraw Rs.${amount}. New Balance: Rs.${this.balance}`);
    }
};

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(300);
myAccount.withdraw(1500);