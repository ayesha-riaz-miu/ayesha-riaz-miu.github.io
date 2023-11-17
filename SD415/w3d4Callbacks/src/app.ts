// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";
import { rootCertificates } from "tls";

//Assignment
/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/




// a)	Copy an array

export function copyArray(originalArray:number[]):number[]{
 let copyArray:number[]=[]
 copyArray=[...originalArray]
copyArray.push(4)
 return copyArray

}
let originalArray=[1,2,3]
console.log("	Copy an array:"+copyArray(originalArray))




// b)	Concatenate arrays into a new array
export function Concat(originalArray1:number[]):number[]{
  let newArray=[4,5,6]
     newArray.push(7)
  let concat=[...originalArray1,...newArray]

  return concat;

}

let originalArray1=[1,2,3]
console.log("Concatenate arrays into a new array:"+Concat(originalArray1))



// e)	Use Math.min and Math.max


export function findmax(arr1:number[],arr2:number[]):number{

  let arr1Max=Math.max(...arr1)
  let arr2Max=Math.max(...arr2)
  
  return arr1Max

}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7, 8, 0];
// let arr1max=Math.max(...arr1)
// console.log(arr1max)
console.log(findmax(arr1,arr2))



// f)	Use rest operator in function calls



export function findProduct(...numbers:number[]):any{

return numbers.reduce((product,current)=>product=product*current,1)

}

let arr11=[1,2,3]
let arr21 = [1,2,3,4,5]
console.log(findProduct(...arr11))
console.log(findProduct(...arr21))