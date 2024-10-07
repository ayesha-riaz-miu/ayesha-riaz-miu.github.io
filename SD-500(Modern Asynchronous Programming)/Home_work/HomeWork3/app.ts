type Course = {
  id: number,
  title: string,
  description: string;
};
type Student = {
  id: number,
  name: string,
  courses: Course[];
};

//operation on data_1:

let data_1: readonly Student[] = Object.freeze([]);
//add the student 
function addStudent_v1(new_student: Student): boolean {
  const student_exit = data_1.find(student => student.id == new_student.id)
  if (student_exit) return false

  const new_data = [...data_1, new_student]
  data_1 = new_data
  return true
}
//get the student
function getStudent_v1(student_id: number): Student | null {
  const student_exit = data_1.find(student => student.id == student_id)
  if (student_exit)
    return student_exit
  return null
}
//update the student
function updateStudent_v1(update_student: Student): boolean { //when update the array use the map
  // const student_exit=data_1.find(student=>student.id==update_student.id)

  // if(!student_exit) return false

  const new_data = data_1.map(student => {
    if (student.id == update_student.id) {
      return { ...student, ...update_student }
    }
    else
      return student
  })

  data_1 = new_data
  return true
}
function removeStudent_v1(student_id: number): boolean {
  let student_exit = data_1.find(student => student.id == student_id)
  if (!student_exit) return false
  const new_data = data_1.filter(student => student.id !== student_id)
  data_1 = new_data
  return true

}

addStudent_v1({ id: 1, name: "assad", courses: [] })  //this is add
addStudent_v1({ id: 1, name: "theo", courses: [] })  //this is not add
addStudent_v1({ id: 2, name: "mike", courses: [] })  //this is add
console.log(data_1)


console.log(getStudent_v1(1)) //this is for get the student-id=1 means first student
updateStudent_v1({ id: 1, name: "Assad saad", courses: [] })
console.log(data_1)

removeStudent_v1(1)
console.log("after delete", data_1)




//operations for data_2
// let data_1: readonly Student[] = Object.freeze([]);
let data_2: { [student_id: string]: { name: string, courses: Course[]; }; } = Object.freeze({});
//add data_2
function addStudent_v2({ id, name, courses }: Student): boolean {
  const student_exit = data_2.hasOwnProperty(id)
  if (student_exit) return false
  const new_obj = structuredClone(data_2)
  new_obj[id] = { name, courses }
  data_2 = new_obj
  return true
}

//get data_2
function getStudent_v2(student_id: number): Student | null {
  const student_exit = data_2.hasOwnProperty(student_id)
  if (student_exit)
    return { id: student_id, ...data_2[student_id] }
  return null
}

//update data_2
function updateStudent_v2({ id, name, courses }: Student): boolean {
  const student_exit = data_2.hasOwnProperty(id)
  if (!student_exit) return false

  const new_obj = structuredClone(data_2)
  new_obj[id] = { name, courses }

  data_2 = new_obj
  return true

}
//delete data
function removeStudent_v2(student_id: number): boolean {

  const student_exit = data_2.hasOwnProperty(student_id)
  if (!student_exit) return false

  const new_obj = structuredClone(data_2)
  delete new_obj[student_id]
  data_2 = new_obj
  return true
}

addStudent_v2({ id: 11, name: "ayesha", courses: [] })
addStudent_v2({ id: 11, name: "ayesha", courses: [] })  //this is not add
addStudent_v2({ id: 12, name: "riaz", courses: [] })
console.log(data_2)

console.log("get the student", getStudent_v2(11))

updateStudent_v2({ id: 11, name: "Assad saad", courses: [] })
console.log("update data_2", data_2)


removeStudent_v2(11)
console.log("after delete", data_2)





// let data_1: readonly Student[] = Object.freeze([]);
// type Student = {
//   id: number,
//   name: string,
//   courses: Course[];
// };
// type Course = {
//   id: number,
//   title: string,
//   description: string;
// };

function addCourse_v1(student_id: number, course: Course): boolean{ 
const course_exit=data_1.find(student=>student.id==student_id)
if(course_exit) return false
}
addCourse_v1(1,{id:1010,title:"javascript",description:"nice book"})







// getCourse(student_id: number, course_id: number): Course{ }
// addCourse(student_id: number, course: Course): boolean{ }
// updateCourse(student_id: number, course: Course): boolean{ }
// removeCourse(student_id: number, course_id: number): boolean{ }