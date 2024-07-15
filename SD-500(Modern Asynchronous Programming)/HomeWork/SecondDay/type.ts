// create a type called Faculty which represents an object with firstname, and lastname properties, both accept a string.
// create a type called Course which represents an object with title, code, and faculty. 
// The title and code accept a string value, and faculty accepts an array of Faculty.
// create a type called Program which represents an object with name and courses properties. 
// The name property accepts a string value, and the courses property accepts an array of Course.

export type Faculty={
    firstname:string;
    lastname:string

}

export type Course={
    title:string;
    code:string;
    faculty:Faculty[]
}


export type Program={
    name:string;
    courses:Course[] 
}

