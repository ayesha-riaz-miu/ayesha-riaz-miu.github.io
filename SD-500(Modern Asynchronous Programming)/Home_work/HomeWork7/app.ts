
// function isPrime(num:number){
//     return new Promise(function(selected,rejected){
//         for (let i = 2; i<=Math.sqrt(num); i++)     
//         if (num % i !== 0){
//            selected(`{ prime: true }`) 
//         }
//    else
//         rejected(`{ prime: false }`)

//     })
// }

// console.log('start');
// isPrime(13)
// .then(data1=>console.log("prime number:",data1))
// .catch(data2=>console.log("not prime number:",data2))
// console.log('end');



const fs = require('fs');
const jsondata= require('./data.json');

class Names  {
  constructor(public data:object) {
    this.data = this.data;
  }
   

}
const namesInstance = new Names(jsondata);
console.log(namesInstance)

