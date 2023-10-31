// • If the salesman is not salaried then
// • 2% for sales from $300 and up to but less than $500
// • 3% for sales $500 or above

import PromptSync from "prompt-sync"; 
const prompt = PromptSync();
let sales_commision;


let sales = prompt("Enter the sales")

 if((sales>=300) && (sales<500))
{
    sales_commision=0.02*sales
    console.log("If the salesman is not salaried then commission is:"+sales_commision)
}

else if(sales>=500)
{
    sales_commision=0.03*sales;
    console.log("If the salesman is not salaried then commission is:"+sales_commision)
}
