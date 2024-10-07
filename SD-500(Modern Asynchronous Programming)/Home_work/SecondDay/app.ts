import {Faculty,Course,Program} from "./type"
import {addFacultyToCourse,addCourseToProgram,combineTwoItems} from "./helper"


const msd: Program = { name: 'Masters in Software Development', courses: [] };
const asaad: Faculty = { firstname: "Asaad", lastname: "Saad" };
const keith: Faculty = { firstname: "Keith", lastname: "Levi" };
const mwp: Course = { title: "MWP", code: "SD500", faculty: [] };


console.log(addFacultyToCourse(mwp, asaad))
addFacultyToCourse(mwp, keith);
addCourseToProgram(msd, mwp);

console.dir(msd, { depth: null });

const theo: string[] = combineTwoItems<string>("Theo", "Saad");
const grades: number[] = combineTwoItems<number>(100, 95); 
console.log(theo)
console.log(grades)
