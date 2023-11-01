// 5. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit and returns the temperature in Celsius.
// console.log("expect 0: ", convertFahrenheit (32)); console.log("expect -17.7778: ", convertFahrenheit (0)); console.log("expect 100: ", convertFahrenheit (212));
// console.log("expect 37.7778: ", convertFahrenheit (100));

// (0°C × 9/5) + 32 = 32°F

// import PromptSync from "prompt-sync"; 
// const prompt = PromptSync();

 function convertFahrenheit(temperature_celsius){
let temperature=(temperature_celsius*9/5)+32
return temperature

 }

let temperature_celsius=32
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit (0)); 
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100));
