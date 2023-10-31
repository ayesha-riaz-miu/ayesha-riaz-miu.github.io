// 2. Make a defining table and function that will return the balance of a savings account that compounds interest monthly.
//  Parameters for the function will be:
// • initial amount
// • annual interest rate
// • number of years to compound
// Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will add the appropriate interest each month.
function compoundInterest(initial_amount,annual_interst,years_commpound){
    let monthly_interst=annual_interst/12;
   
    for(let i=0;i<years_commpound*12;i++){
        let interst=initial_amount*monthly_interst
        initial_amount=initial_amount+interst;
    }
    return initial_amount;
}




let initial_amount=100;
let annual_interst=10;
let years_commpound=1
console.log("expect 110.47", compoundInterest(initial_amount,annual_interst,years_commpound));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

