[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Efq-vyL8)
# SD500-Promise

Change `isPrime` function below to run asynchronously using Promise.  
* if the input is prime number, the promise resolves with `{ prime: true }`.  
* if the input is not a prime number, it rejects with `{ prime: false }`.  
```typescript
const isPrime = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n > 1;
};
```
When you finish, test using the code below:
```typescript
console.log('start');
isPrime(7)
    .then(console.log)
    .catch(console.error);
console.log('end');

// start
// end
// { prime: true }
```
Make changes to provided test and use `async`/`await` instead of `.then()` and `.catch()`
