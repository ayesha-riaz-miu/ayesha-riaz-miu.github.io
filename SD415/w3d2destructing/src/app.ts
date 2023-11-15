// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";
import { rootCertificates } from "tls";



//first exersice

// const team = [ "Bob", "Fred", "Jim“]
// // destructure the team array onto variables with the same names as the elements, but all lower case
// console.log("expect Bob", bob );
// console.log("expect Jim", jim);

// let team=["Bob","Fred","Jim"]
// let[bob,fred,jim]=team

// console.log("expect Bob", bob );
//  console.log("expect Jim", jim);
//  console.log("expect Jim", fred);

//Second exercise
//  const team = { point: "Bob", 
//               shooting: "Fred", 
//                power: "Jim", 
//                 small: "Al", 
//                  center: "Big Sleep" }

//   let{point,shooting,power,small,center} =team;

//   console.log("expect Big Sleep", center);
// console.log("expect Jim", power);   

// let{point:one,shooting:two,power:four,small:three,center:five} =team;

// console.log("expect Jim: ", four);
// console.log("expect Bob: ", one);

// const john = {
//     name: "John",
//     surname: "Smith",
//     isAdmin: false,
//     birthday: {"year": 2000, "month": "February", "day": 3},
//     friends: [0,1,2,3]
//     };

//     let json=JSON.stringify(john)
//     console.log(json)

//     let colone=JSON.parse(json)
//     console.log(colone)
//     console.log(john==colone)
//     console.log(john===colone)


// Question1:maximun salary name of person
// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
// */

// the following type definition says that SalaryObj has keys of type string and values of type number

type SalaryObj = { [key: string]: number };


export function topSalary(salaries:SalaryObj):any{
let maxSalary=0
let nameOfPerson;

for(let [name,value] of Object.entries(salaries)){
      if(value>maxSalary){
      maxSalary=value
       nameOfPerson=name;}
      
      
}
console.log(nameOfPerson)
return maxSalary
}

let salaries1:SalaryObj={
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

let salaries2:SalaryObj={
    "John": 100,
        "Pete": 300,
        "Mary": 250,
        "Bob": 301,
        "Alice": 400,
        "Sally": 250
}
console.log(topSalary(salaries1))
console.log(topSalary(salaries2))


// Question2:classroom

type Classroom = {
    //YOUR CODE HERE
    roomNumber:number,
    capacity:number,
    students:[]
}

type Student = {
   name:string,
   age:number
}   


export const classrooms = [
    {
      roomNumber: 101,
      capacity: 30,
      students: [
        { name: "Alice", age: 18 },
        { name: "Bob", age: 19 },
        { name: "Charlie", age: 17 },
      ],
    },
    {
      roomNumber: 102,
      capacity: 25,
      students: [
        { name: "David", age: 20 },
        { name: "Eve", age: 18 },
      ],
    },
    {
      roomNumber: 103,
      capacity: 35,
      students: [
        { name: "Frank", age: 19 },
        { name: "Grace", age: 20 },
        { name: "Helen", age: 17 },
      ],
    },
  ];
/* 

2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
string format:  [“101::30”, :102::25”, “103::35”].
3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
format [{roomNumber: 101, capacity: 30} , …  ]
4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
roomNumber as parameters and returns the number of students in the specified classroom.
5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
 minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns 
the average age of students across all classrooms.
 */


// 1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
const collectRoomNumbers = (classrooms: { roomNumber: number }[]): number[] => {
     return classrooms.map((classroom) => classroom.roomNumber);
    
  };
 console.log(collectRoomNumbers(classrooms));



//  2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
//  string format:  [“101::30”, :102::25”, “103::35”].
function collectRoomsAndCapacities(classroom:any):any{
    return classrooms.map(({ roomNumber, capacity }) => `${roomNumber}::${capacity}`);
};

console.log(collectRoomsAndCapacities(classrooms))



// 3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
// format [{roomNumber: 101, capacity: 30} , …  ]
function  collectLabeledRoomCaps (classroom:any):any{
    return classrooms.map(({ roomNumber, capacity }) => `"roomNumber:"${roomNumber}::"capacity:"${capacity}`);
}
console.log(collectLabeledRoomCaps (classrooms))



// 4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
// roomNumber as parameters and returns the number of students in the specified classroom.

