[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/X0RSjaQ3)
# SD500-HTTP-Fetch
Create a TS workspace and install the following dependencies:
* `npm i cross-fetch`
* `npm i prompts`
* `npm i @types/prompts -D`
  
To use the dependencies, you will to add the following imports:
* `import fetch, { Response } from 'cross-fetch';`
* `import prompts from 'prompts';`
  
Read the documentation for how to use the [prompts API](https://www.npmjs.com/package/prompts).
  
The application will prompt the user to enter a user ID number between 1 and 10, once entered and validated, send a GET request to the following URL: `https://jsonplaceholder.typicode.com/users/:id` after you replace `:id` with the value of the user ID. 
  
Make sure you [type the response](https://transform.tools/json-to-typescript) and display the requested user details (`name`, `email`, `phone`), and prompt the user to enter another user ID.. etc
