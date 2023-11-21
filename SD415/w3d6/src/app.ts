// //write any code you want to test here and run with npm run app

import { Console } from "console";
import { type } from "os";
import { setTimeout } from "timers/promises";
import { rootCertificates } from "tls";


type Node = {
    name: string;
    value?: string | null;
    children?: Node[] | null;
};

function nodeWalker(node: Node): void {
    console.log(node.name);

    if (node.children) {
        for (const child of node.children) {
            nodeWalker(child);
        }
    }
}

// Your example nodes
let node4: Node = {
    name: "label",
    value: "Name",
    children: null
};

let node5: Node = {
    name: "input",
    value: "this was typed by a user",
    children: null
};

let node3: Node = {
    name: "p",
    value: "This is text in a paragraph",
    children: null
};

let node2: Node = {
    name: "div",
    value: null,
    children: [node4, node5]
};

let node1: Node = {
    name: "body",
    children: [node2, node3],
    value: null,
};

// Call the nodeWalker function with the root node
nodeWalker(node1);
type Person = { name: string; salary: number;}
//index signature since do not know names of properties ahead of time
//Department is an object with an unknwon number and name of properties that are strings and values
//that are Person[] or Department objects
type Department = { [ deptName: string]: Person[] | Department};
const company: Department = {
 sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
 development: {
 sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
 internals: [{name: 'Jack', salary: 1300}]
 }
 };
const namelist:Person[]=[]
 function sumSalaries(department: Department) {
 
 if (Array.isArray(department)) { // case (1)
  // department.forEach(person=>console.log(person.name));
  department.forEach(person=>namelist.push(person.name));
  //department.forEach(person=>console.log(person.salary));
 return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
 } else { // case (2)
 let sum = 0;
 for (const subdep of Object.values(department)) {
 const subDepartment = subdep as Department;
 sum += sumSalaries(subDepartment); // recursively call for subdepartments, sum the results
 }
 return sum; }}
 console.log(sumSalaries(company));
 console.log(namelist)