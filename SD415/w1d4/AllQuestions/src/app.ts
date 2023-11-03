// const array: number[] = [10,20,30,40,50];
// console.log(array)

import { reverse } from "dns";


// function sumMatrix(arr: number[][]) { 
//   //implement this
//   let total=0;
//   for(const row of arr){
//     for(const num of row){
//       total=total+num

//     }
//   }
//   return total
// }
// const matrix=[[1,2,3], [4,5,6],[7,8,9]];
// console.log("expect 45: ", sumMatrix(matrix));



export function isVowel(char: string): boolean {
  if (char.length !== 1) {
    return false;
  }
  char = char.toString();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    return true;
  }
  return false;
}

//Q1: Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. 
// For this and all following exercises be sure to include the required argument types and function return types.

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c)
    return a;
  else if (b > a && b > c)
    return b;
  else if (c > a && c > b)
    return c;
  return 0;  //IMPLEMENT THIS -- DO NOT USE MATH.MAX
}
// console.log("maximun number is:", maxOfThree(10, 5, 7))

//Q2: Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// partA:sum
export function sum(array: number[]): number {
  let sum = 0
  for (let value in array) {
    sum = sum + array[value]

  }
  return sum;


}
// partB:multiplication
export function multiplication(array: number[]): number {
  let product = 1;
  for (let value in array) {
    product = product * array[value]
  }
  return product;
}

// let array=[1,2,3,4]
// console.log(sum(array))
// console.log(multiplication(array))

// 3. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
export function findLongestWord(array1: string[]): number {

  let comp = array1[0].length

  //console.log(comp)
  for (let value in array1) {
    if (array1[value].length > comp)
      comp = array1[value].length
  }
  return comp;
}


// let array1=["ayesha","apple","eatfoodhealty"]
// console.log( findLongestWord(array1))

// Q4. Reverse an Array
export function reverseArray(array: string[]): string[] {
  //let newarray = array.slice().reverse();
  let reverse=[];
  let index = 0
  for (let i = array.length - 1; i >=0; i--) {
    reverse[index] = array[i]
    index++;
  }
  // console.log(array)
  return reverse;
}
 //console.log(reverseArray(["A", "B", "C"]));

// Q5: Write a function that takes two integers as inputs and returns a 2-dimensional 
//  array containing sequential numbers across each row as follows:


export function generateArray(rows:number,columns:number):number[][]{
//let row:number[]=[]
let counter=1
let result:number[][]=[]
  for(let i=0;i<rows;i++){
    let row: number[] = [];
    for(let j=0;j<columns;j++){
      row.push(counter)
      counter++
     
    }
      result.push(row)
  }
  return result;
}
let rows=3;
let columns=3;
console.log(generateArray(rows,columns))




