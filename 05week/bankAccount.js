// BANK ACCOUNT CLASS

class BankAccount {
  constructor(acctNum, owner){
    this.acctNum = acctNum 
    this.owner = owner 
    this.transactions = []
  }

  balance() { 
    // returns the current balance on the account = sum of transactions array
    return this.transactions
    .reduce((prev,curr,i) => prev + curr, 0)
  }

  deposit(amt) {
    // creates new transaction and adds to the transactions array.
    // deposit must be greater than 0
    if(amt > 0){
      this.transactions.push(amt)
    } else {
      console.log('ALERT: Deposits must be a minimum of $1')
    }
  }

  charge(amt, payee) {
    //creates new transaction and adds to the transaction array
    //cannot charge more than current balance
    if(amt <= this.balance()){
      this.transactions.push(-amt)
    } else {
      console.log('ALERT: Insufficient funds')
    }
  }
}

// TRANSACTION CLASS

class Transaction {
  constructor(amt, payee) {
    this.date = new Date()
    this.amt = amt 
    this.payee = payee
  }
}

// STRETCH GOAL = SAVINGS ACCOUNT CLASS
// extension of BANK ACCOUNT CLASS

class Savings extends BankAccount{
  constructor(acctNum, owner, interestRate){
    super(acctNum, owner)
    this.interestRate = interestRate
  }

  balance() { 
    let value = this.transactions
      .reduce((prev,curr,i) => prev + curr, 0)

    return value.toFixed(2)
  }

  deposit(amt) {
    if(amt > 0){
      this.transactions.push(amt)
    } else {
      console.log('ALERT: Deposits must be a minimum of $1')
    }
  }

  charge(amt, payee) {
    if(amt <= this.balance()){
      this.transactions.push(-amt)
    } else {
      console.log('ALERT: Insufficient funds')
    }
  }

  accrueInterest(){
    // determine accrued interest by taking the current balance and interest rate. 
    // add accrued interest to transactions array
    let interest = this.balance() * (0.01*this.interestRate)
    let amount = interest.toFixed(2)
    let amountNum = Number(amount)

    this.transactions.push(amountNum)
  }
}

// TESTS

//Account creation & depost 200 dollars

const myAcct = new BankAccount('D5451', 'Aaron')
console.log(myAcct)
console.log(`Balance: $${myAcct.balance()}`)

myAcct.deposit(200)
console.log(myAcct)
console.log(`Balance: $${myAcct.balance()}`)

console.log('')
console.log('*******Transaction')
console.log('')

// Create a charge transaction

let steak = new Transaction(15.50, 'WholeFoods')
myAcct.charge(steak.amt, steak.payee)

console.log(myAcct)
console.log(`Balance: $${myAcct.balance()}`)

// Create a deposit transaction

let bonus = new Transaction(800, 'Xmas Bonus')
myAcct.deposit(bonus.amt)

console.log(myAcct)
console.log(`Balance: $${myAcct.balance()}`)
console.log('*****************')

// Create instance of Savings Account
let mySavings = new Savings('FF2023', 'Kane', 0.03)
console.log(mySavings)
console.log(`Balance: $${mySavings.balance()}`)

// Create a savings deposit transaction

let covid = new Transaction(1200, 'Govt Money')
mySavings.deposit(covid.amt)

console.log(mySavings)
console.log(`Balance: $${mySavings.balance()}`)

// Create a savings charge transaction

let shoes = new Transaction(115.91, 'Nobull')
mySavings.charge(shoes.amt, shoes.payee)

console.log(mySavings)
console.log(`Balance: $${mySavings.balance()}`)

// Deposit accured interest 

mySavings.accrueInterest()
console.log(mySavings)
console.log(`Balance: $${mySavings.balance()}`)