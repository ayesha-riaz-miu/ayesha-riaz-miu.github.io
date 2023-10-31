// 2. Write a loop that continually prompts for age until you enter age older than 18 •
// Write both while versions.
import PromptSync from "prompt-sync"; 
const prompt = PromptSync();

let age=parseInt(prompt("Enter the age:"));
while(age<18){
    age=parseInt(prompt("Enter the age again:"));

}
console.log("Age is older than 18")
