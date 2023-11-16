// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";
import { rootCertificates } from "tls";

// classwork:
// function makeCounter():()=>number{
//   let count=0
//   function innerFunction():number{
//     count++
//     return count;
//   }
//   return innerFunction;
// }
// let counter1=makeCounter()
// let counter2=counter1
// let counter3=makeCounter()

// console.log(counter1())
// console.log(counter1())
// console.log(counter2())
// console.log(counter1())
// console.log(counter3())





// Assignment array question



//Question1:




/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(arr:number[]):()=>boolean{
 
   function checkaruments():boolean{
    return arr.includes(10)
  }
  return checkaruments
}
let arr = [1, 2, 3, 4, 5, 6, 7];
const filter1To7 = inArray(arr);

console.log(filter1To7())



//Question2:


/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
export function inBetween(low:number,high:number):(value:number)=>boolean{
  return function (value:number):boolean{
       return value>=low && value<=high
  }
}
let low=10
let high=20;
let checkvalues=inBetween(low,high)
console.log(checkvalues(15))
console.log(checkvalues(25))
console.log(checkvalues(12))


//Question:3


/**
 * @returns {Function} closure that returns it's number
 */



  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...

  //type Shooter= () => void;
export function makeArmy() {
 const Shooters = [];
 let i = 0;
 while (i < 10) {
let shooter = function() {
 console.log( i );
};
Shooters.push(shooter);
i++;
 }
 return Shooters;
}
const army = makeArmy();
army[0]();


//Question4:Closure and a Shopping Cart

type CartItem = {
  name: string;
  price: number;
};

type ShoppingCart = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemName: string) => void;
  calculateTotal: () => number;
};

  export const createShoppingCart = (): ShoppingCart => {
  const cart: CartItem[] = [];

  const addItem = (item: CartItem): void => {
    cart.push(item);
    console.log(`${item.name} added to the cart.`);
  };

  const removeItem = (itemName: string): void => {
    const index = cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
      const removedItem = cart.splice(index, 1)[0];
      console.log(`${removedItem.name} removed from the cart.`);
    } else {
      console.log(`Item "${itemName}" not found in the cart.`);
    }
  };

  const calculateTotal = (): number => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total cost: $${total.toFixed(2)}`);
    return total;
  };

  return {
    items: cart,
    addItem,
    removeItem,
    calculateTotal,
  };
};

// Example usage:
const myShoppingCart = createShoppingCart();

const item1: CartItem = { name: 'Laptop', price: 999.99 };
const item2: CartItem = { name: 'Headphones', price: 49.99 };

myShoppingCart.addItem(item1);
myShoppingCart.addItem(item2);

myShoppingCart.calculateTotal();

myShoppingCart.removeItem('Laptop');

myShoppingCart.calculateTotal();




