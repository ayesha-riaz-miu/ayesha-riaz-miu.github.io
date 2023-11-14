// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";


//sort
// function compareNumeric(a:number, b:number):number { //need to modify this function
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
//   return 0;
//  }
//  let arr = [ 1, 15, 2 ];
//  arr.sort(compareNumeric);
//  console.log(arr); 



//reduce
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(function (product, current) { return product * current; }, 1);
// console.log("product of array elements: ",result)

// let max= arr.reduce(function (max, current):number { 
// if(current>max)
// return current
// else 
// return max;
//   },-Infinity );

// console.log("maximum number in array: ",max)

// function sortarry(a:number,b:number):number{

//   if(a>b) return 1;
//   if(a==b) return 0;
//   if(b>a)  return -1

// return 0
// }
// let arr= [ 2, 1, 15 ];
// arr.sort(sortarry)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];
// let productofarray=arr.reduce(function (product , current){retrun product*current},1)
// // let result = arr.reduce(function (product, current) { return product * current; }, 1);


//Assignment w3d1

/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
// describe("filterRange", function () {
//     it("returns the filtered values", function () {
//         let arr = [5, 3, 8, 1];
//         let filtered = filterRange(arr, 1, 4);
//         assert.deepEqual(filtered, [3, 1]);
//     });

function filterRange(arr:number[],a:number, b:number):number[] { //need to modify this function
   
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=a && arr[i]<b)
        result.push(arr[i])
  
    }
     return result

   }
   let arr = [5, 3, 8, 1];
   let a=1;
   let b=4
  console.log(filterRange(arr,a,b))



 
//   reduce
//   - find sum of numbers
//   - find average of numbers
//   - find max of numbers

let numArray = [5,0, 7, 77, -20, 300, 51, 2]

let sumofArray=numArray.reduce(function(sum,current){return sum+current},0)
console.log("sim of all numbers in array",sumofArray)

let average=sumofArray/numArray.length
console.log("average of numbers in array",average)

let maximun=numArray.reduce(function(max,current){
    if(current>max)
    return current
else
return max
},-Infinity)

console.log("maximun number in array",maximun)


const peopleArray = [
    { name: "Sam", age: 15}, 
    {name: "William", age: 6}, 
    {name: "Lucy", age: 13}, 
    {name:"Barney", age: 80}]

    let max_age=peopleArray.reduce(function(max,people){
        if(people.age>max)
        return people.age
    else
    return max
    },-Infinity)

    console.log("maximun age",max_age)


//     // - write function, sumEvens(arr), that uses a chain of map filter reduce to find the sum of ages of people
//     // with even number ages

//     //map
    const peopleArray1  = [
        { name: "Sam", age: 15}, 
        {name: "William", age: 6}, 
        {name: "Lucy", age: 13}, 
        {name:"Barney", age: 80}]
let map_people=peopleArray1.map(people=>people.age)
console.log(map_people)

let filter_people=peopleArray1.filter(people=>people.age%2==0)
console.log(filter_people)


let reduce_people=peopleArray .reduce((sum , people) => {
if(people.age%2===0){
         sum + people.age;}
        
},0);

console.log(reduce_people)






