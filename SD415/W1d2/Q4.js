// 4.Write functions sumDigits and multDigits that take an integer parameter and 
// return the sum or product of the digits in the number. Use the / and % operators to find the digits.
function add(number){
    let sum=0;
    while(number>0)
    {
    let last_digit=number%10;
      sum=sum+last_digit;
   
    number = Math.floor(number / 10);
    
 
    }
   return sum;
   
}
function multiplication(number){
  let multiply=1;
  while(number>0){
    let digit=number%10;
    number=Math.floor(number/10)
    multiply=multiply*digit
  }
  return multiply
  

}

let number=1234;


console.log(add(number))
console.log(multiplication(number))
