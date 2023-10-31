
// 55555
// 4444
// 333
// 22
// 1
import PromptSync from "prompt-sync"; 
const prompt = PromptSync();

for(let i=5;i>=1;i--){
    let str="";
    for(let j=1 ;j<=i;j++){
        str=str+i;
    }
    console.log(str)
}



