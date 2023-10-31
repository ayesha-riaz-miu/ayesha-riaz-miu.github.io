// Write do while versions.
import PromptSync from "prompt-sync"; 
const prompt = PromptSync();

let age=parseInt(prompt("Enter the age:"));
do{
    age=parseInt(prompt("Enter the age again:"));
}
while(age<18)
{
    console.log("Age is older than 18")
}
