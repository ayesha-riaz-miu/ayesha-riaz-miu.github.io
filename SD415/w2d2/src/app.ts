//write any code you want to test here and run with npm run app

import { Console } from "console";



// export const calculator = {

    

// };  // implement this

export type calculator={
    operand1:number
    operand2:number

     operator:string[]
};
let calculator={
   operand1:2,
   operand2:3,

  operator:["+","*"]
 

   
}

export function add(operand1:number,operand2:number):number{


       return operand1+operand2;
}
export function multipication(operand1:number,operand2:number):number{
 
    
           return operand1*operand2;
    }

   export function calculate(operator:string[]):void{
        let result;
         for(let i=0;i<operator.length;i++){
            if(operator[i]=="+"){
                result=add(calculator.operand1,calculator.operand2)
                console.log("Addition of 3 and 2 is:",result)
                
            }
           
           else  if(operator[i]=="*"){
            result= multipication(calculator.operand1,calculator.operand2)
            console.log("Multiplication of 3 and 2 is:",result)

           }
       

         }
       
    }
console.log(calculate(calculator.operator))



