 import { count } from "console"
import {Faculty,Course,Program} from "./type"

// helpers.ts
// create a function addFacultyToCourse which accepts two parameters: course and faculty. The function returns boolean.

// return true if the faculty's firstname and lastname does not previously exists in the course, and was added successfully.
// return false if the faculty's firstname and lastname already exists in the course, do not accept adding the same faculty twice. create a function addCourseToProgram which accepts two parameters: program and course. The function returns boolean.
// return true if the course code does not previously exists in the program, and was added successfully.
// return false if the course code already exists in the program, do not accept adding the same course twice.



export function addFacultyToCourse(course:Course,faculty:Faculty):boolean{
    let checkexists=course.faculty.find((name)=>name.firstname==faculty.firstname && name.lastname==faculty.lastname)

if(!checkexists){
    course.faculty.push(faculty)
    return true

}
else 
return false
}

export function  addCourseToProgram (program:Program,course:Course):boolean{
    const programExit=program.courses.find(codename=>codename.code==course.code)
    if(!programExit){
        program.courses.push(course)
        return true
    }
    else 
    return false
}

// type Array={
//     firstname:string;
//     lastname:string;
// }

 export function combineTwoItems<T>(firstname:T,lastname:T):T[]{

  return [firstname,lastname]

}