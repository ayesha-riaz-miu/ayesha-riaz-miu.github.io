// 1. Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales from $300 and up to but less than $500
// • 2% for sales $500 or above

import PromptSync from "prompt-sync"; 
const prompt = PromptSync();
let sales_commision;
let salary=10000;

let sales = prompt("Enter the sales")
if(sales<300)
{
    
    console.log("No commision")
}
else if((sales>=300) && (sales<500))
{
    sales_commision=0.01*salary
    console.log("If the salesman is salaried then commission is:"+sales_commision)
}

else if(sales>=500)
{
    sales_commision=0.02*salary
    console.log("If the salesman is salaried then commission is:"+sales_commision)
}
