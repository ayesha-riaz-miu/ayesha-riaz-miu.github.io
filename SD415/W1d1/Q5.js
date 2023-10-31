
// 5. Cost of House Down Payment

import PromptSync from "prompt-sync"; 
const prompt = PromptSync();

let cost=parseInt(prompt("Enter the cost:"))
let down_payment;
if(cost<50000)
{
    down_payment=0.05*50000
     console.log(down_payment)
}

else if((cost>=50000 )&&(cost<100000))
{
    down_payment=1000+0.1*(cost-50000)
     console.log(down_payment)
}
else if((cost>=100000)&&(cost<=200000))
{
    down_payment=2000+0.15*(cost-100000)
    console.log(down_payment)

}
else if(cost>=200000){
    down_payment=5000+0.1*(cost-200000)
    console.log(down_payment)
}
