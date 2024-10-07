[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/546A6llF)
# SD500-Classes

Complete the code for the `MyStorage` class that will be used to add, read, update, and remove key-value pairs in the `state` immutable private property. Some methods return a `boolean` to indicate whether the operation was successfull or not.
```typescript
interface State<T> { data: Array<{ [key: string]: T; }>; }

class MyStorage<T> {
    private state: State<T> = Object.freeze({ data: [] });

    getItem(key: string): T | null {  }
    addItem(key: string, value: T): boolean { }
    updateItem(key: string, value: T): boolean { }
    removeItem(key: string): boolean { }
    getStorage() { return this.state; }
}

// Test with this code
const storage = new MyStorage<string>();
storage.addItem("firstname", "Asaad");
storage.addItem("lastname", "Saad");
console.log(storage.getStorage()); // { data: [ { firstname: "Asaad" }, { lastname: "Saad" } ]}

storage.removeItem("lastname");
console.log(storage.getStorage()); // { data: [ { firstname: "Asaad" } ]}

storage.updateItem("firstname", "Theo");
console.log(storage.getItem('firstname')); // Theo
console.log(storage.getStorage()); // { data: [ { firstname: "Theo" } ]}
```
