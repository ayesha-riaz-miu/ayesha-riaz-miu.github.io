// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";
import { setTimeout } from "timers/promises";
import { rootCertificates } from "tls";


// classwork:
// • Write both iterative and recursive solutions to calculate factorial of an integer.
// factorial (0) = 1
// factorial (n) = n * factorial (n-1) [for n>0]

// iterative method

function factorial(n:number):any{
let result=1
  for(let i=5;i>0;i--){
   result=result*i;
  }
return result
}


console.log("find factorial by iteraton method:",factorial(5))

// recusive method
function findfactorial(num:number):number{
if(num==1)
return num
else
return num*findfactorial(num-1)

}
console.log("recursion method of factorial",findfactorial(5))




// find the string length

function findLengthRecursive(str:string):number{

  if(str=="")
  return 0
else 
return 1+findLengthRecursive(str.substring(1))

}

console.log("Length of the string is:",findLengthRecursive("hello"))

//find the alphabet in string
function countInstances(str:string,letter:string):number{
  if(str=="")
  return 0
      else if(str[0]==letter)
        return 1+countInstances(str.substr(1),letter)
else 
        return countInstances(str.substr(1),letter)
}

console.log(countInstances("All that is great and good.", "t") )

// Assignment Question
// • Sum all numbers till the given one
function sum(num:number):number{

   if(num==0)
   return num
  else 
  return num+sum(num-1)


}
console.log("sum of that number is:",sum(10))


// find the fibonacci numbers


function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


console.log("fibonacci numbers is:",fibonacci(30))
console.log("fibonacci number is",fibonacci(10))