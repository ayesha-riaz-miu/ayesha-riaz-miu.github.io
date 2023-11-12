// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";

// map :
// - double numbers
// filter:
//  - filter all even numbers
// - find even, include even
let numArray = [5,0, 7, 77, -20, 300, 51, 2]

let map_array=numArray.map(elements=>elements*2 )
console.log("double the numbers",map_array)


let filter_array=numArray.filter(elements=>elements%2==0)
console.log("filter the array",filter_array)

let find_even=numArray.find(elements=>elements%2==0)
console.log("find the even",find_even)

let include_even=numArray.includes(77)
console.log("include the number",include_even)



// map :
// - double age
// - filter all age > 10
// find age > 10, include age > 10

let peopleArray = [{name: "Sam", age: 15},
                  {name: "William", age: 6}, 
                  {name: "Lucy", age: 13}, 
                  {name: "Barney", age: 80}]

let map_people=peopleArray.map(elments=>elments.age*2)
console.log("double age",map_people)

let filter_people=peopleArray.filter(elements=>elements.age>10)
console.log("filter all age > 10",filter_people)

let find_people=peopleArray.find(elements=>elements.age>10)
console.log("find age > 10",find_people)

//let include_people=peopleArray.includes(15)  
//console.log("find age > 10",include_people)

type donation={
  funderId:number,
  amount:number
   
}

const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };
const day1 = {    donations: [donation1, donation2],    date: "01/10/2022",};
const day2 = {    donations: [donation3, donation4, donation5],    date: "01/11/2022",};

const dailyRecord = [day1, day2];


// 11a.  [3] Use a for loop in a function, dailyTotal, to find total amount donated for a given day.
// console.log("expect 21: ", dailyTotal(day2.donations));


function dailyTotal(donations:any):number{
let sum=0;
for(let i=0;i<donations.length;i++){
 sum=sum+donations[i].amount
}
return sum;

}

function dailyTotalReduce(donations:any):number{
  let sum=0;
for(let i=0;i<donations.length;i++){
  sum=sum+donations[i].amount
 }
 return sum;
}
function totalDonations(dailyRecord:any):number{

  let totaldonation=dailyTotal(day2.donations)+ dailyTotalReduce(day1.donations)

return totaldonation

}


function averageDonation(day1:any):number{
  let averageDonation=dailyTotalReduce(day1.donations)/2

  return averageDonation
}

 console.log("expect 21: ", dailyTotal(day2.donations));
 console.log("expect 110: ", dailyTotalReduce(day1.donations))
 console.log("expect 131: ", totalDonations(dailyRecord));
 console.log("expect 55: ", averageDonation(day1));




    


 








