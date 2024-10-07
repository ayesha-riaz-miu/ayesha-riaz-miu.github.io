[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CxYsPTEO)
# SD500-Inheritance
Create a class `PersistedStorage` which extends `MyStorage` class (from hw4) and persist all state changes to the hard drive.
* When the class instantiate, read and set the state from the hard disk into memory
* Every time the state changes you will have to update the persisted storage state back into the hard drive.
  
Because Node does not have a native `localStorage` object, you may use the `node-localstorage` package, which you can install using:
1. `npm i node-localstorage`
2. `npm i @types/node-localstorage -D`
  
Check the [package documentation](https://github.com/lmaccherone/node-localstorage) to learn more about the API. Here is an example on how to use it to write/read key/value pairs
```typescript
import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

localStorage.setItem('name', 'Asaad');
const name = localStorage.getItem('name');
if (name) {
    console.log(name); // Asaad
}

localStorage.setItem('state', JSON.stringify({ name: 'Asaad' }));
const state = localStorage.getItem('state');
if (state) {
    JSON.parse(state); // { name : "Asaad" }
}
```
You may use a code structure like this:
```typescript
class PersistedStorage extends MyStorage{
    // your constructor here
    addPersistedItem(key: string, value: T): boolean { 
        const result = this.addItem(key, value);
        // your code here
    }
    // the rest of methods here 
}
```
