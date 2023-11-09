//write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";





type CustomerRecord = {
  customerId: number;
  customerTransactions: number[];
};

type Bank = {
  transactionsDB: CustomerRecord[];
  saveTransaction: (customerId: number, amount: number) => void;
  debit: (customerId: number, amount: number) => void;
  credit: (customerId: number, amount: number) => void;
  getBalance: (customerId: number) => number;
  bankBalance: () => number;
};

export const bank = {} as Bank;

bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] }
];
bank.saveTransaction = function (customerId: number, amount: number): void {
  const customer = bank.transactionsDB.find((customer) => customer.customerId === customerId);
  if (customer) {
    customer.customerTransactions.push(amount);
  }
};

bank.debit = function (customerId: number, amount: number): void {
  const customer = bank.transactionsDB.find((customer) => customer.customerId === customerId);
  if (customer) {
    customer.customerTransactions.push(-amount); // Debit is represented as a negative amount.
  }
};

bank.credit = function (customerId: number, amount: number): void {
  const customer = bank.transactionsDB.find((customer) => customer.customerId === customerId);
  if (customer) {
    customer.customerTransactions.push(amount);
  }
};
bank.getBalance = function (customerId: number): number {
  const customer = bank.transactionsDB.find((customer) => customer.customerId === customerId);
  if (customer) {
    // Calculate the balance by summing up the transactions.
    const balance = customer.customerTransactions.reduce((acc, transaction) => acc + transaction, 0);
    return balance;
  }
  return 0; // Customer not found, return 0 balance.
};

bank.bankBalance = function (): number {
  // Calculate the bank's total balance by summing up all customer balances.
  const totalBalance = bank.transactionsDB.reduce((acc, customer) => {
    const customerBalance = customer.customerTransactions.reduce((acc, transaction) => acc + transaction, 0);
    return acc + customerBalance;
  }, 0);
  return totalBalance;
};
// Example usage:
bank.debit(1, 20); // Debit 20 from customer 1

bank.credit(2, 30); // Credit 30 to customer 2

console.log("Customer 1 Balance:", bank.getBalance(1)); // Should print the balance of customer 1
console.log("Bank Balance:", bank.bankBalance()); // Should print the total bank balance