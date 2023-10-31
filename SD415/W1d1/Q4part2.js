// 1
// 22
// 333
// 4444
// 55555

import PromptSync from "prompt-sync"; 
const prompt = PromptSync();

for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=i;j++)
    {
        str=str+i;
    }
    console.log(str)
}

    
 
