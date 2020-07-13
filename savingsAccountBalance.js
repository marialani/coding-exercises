// 3. Savings Account Balance

function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
  let accountBalance = openingSum;
  for (let i = 0; i < numMonths; i++) {
    let interest = (accountBalance / 100) * interestRate;
    let taxableIncome = accountBalance - taxFreeLimit;
    let monthlyTax = taxableIncome < 0 ? 0 : (taxableIncome / 100) * taxRate;

    accountBalance += interest - monthlyTax;
  }
  return accountBalance;
}

// Example outputs
console.log(balance(10000, 1, 20000, 1, 2)); // 10201
console.log(balance(25000, 2, 20000, 1, 2)); // 25904.5
console.log(balance(19800, 2, 20000, 1, 2)); // 20597.96
