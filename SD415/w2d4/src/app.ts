// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";



let arr=["abc","123a", "ab123", "123.3", "123"]

arr.forEach(function(items){
  console.log( parseInt(items))
})


export function ucFirst(str:string):any {

   let str1=  str[0].toUpperCase()+str.slice(1)

   return str1
}
let str="john"


console.log(ucFirst(str))

 function checkSpam(str1:string):void{

    console.log(str1.includes('buy ViAgRA now'))
    

}


 function trancate(str:string):void{

    console.log(trancate(str))
    

}
let str1="What I'd like to tell on this topic is"
console.log(trancate(str))
export function extractCurrencyValue(n:string):any{
for(let i=0;i<n.length;i++){
    if(n[i]=='$'){
        n[i].slice();
    }
 
return n
}


}

let n='$20'
console.log( extractCurrencyValue(n))



export function getMaxSubSum(array:number[]):number{
    let sum=0
    let number;
   for(let i=0;i<array.length;i++){
    if(array[i]>0){
        sum=sum+array[i]
    }
    if(array[i]>10){
      return array[i]

    }
   
   }
   return sum
}

let array=[-1, 2, 3, -9, 11]
console.log(getMaxSubSum(array))





   
