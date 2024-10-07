// data structure 5
// add student in course (if course id exist, and student_id does not exist)
// update student full name in course (if course id exist, and student_id exist)
// delete student from a course (if course id exist, and student_id exist)

import { title } from "process";

// read student full name by student_id, and course id (if course id exist, and student_id exist)
type Student1 = { 
    student_id: number, 
    firstname: string; 
    lastname: string; };
type Course = { 
    [id: string]: { title: string, students: Student1[]; }; };
const data5: Course = {
    'course1':{title:"title1",students:[{student_id:1,firstname:"ayesha",lastname:"riaz"}]},
    // 'course2':{title:"title2",students:[{student_id:2,firstname:"zarwa",lastname:"fatima"}]}
};

function addstudent(ownid:string,new_student:Student1){
    if(!(data5.hasOwnProperty(ownid))) return false

    const student_exit=data5[ownid].students.find(item=>item.student_id==new_student.student_id)

    if(!student_exit) {
        data5[ownid].students.push(new_student)
    }
}
function update_student(ownid:string,id:number,firstname:string,lastname:string){
    if(!(data5.hasOwnProperty(ownid))) return false

    const studentindex_exit=data5[ownid].students.findIndex(item=>item.student_id==id)
    // console.log(student_exit)
 if(studentindex_exit==-1) {
        data5[ownid].students[studentindex_exit].firstname=firstname
       
        data5[ownid].students[studentindex_exit].lastname=lastname
    }


 }
 function delete_student(ownid:string,id:number){
    if(!(data5.hasOwnProperty(ownid))) return false
    const studentindex_exit=data5[ownid].students.findIndex(item=>item.student_id==id)
    if(studentindex_exit==-1){
        data5[ownid].students.splice(studentindex_exit,1)
    }
   
    

 }

addstudent("course1",{student_id:3,firstname:"dania",lastname:"riaz"})
console.dir(data5, { depth: null });
update_student("updatedata"+"course1",1,"M","husban")
console.dir(data5, { depth: null });
delete_student("course1",1)
console.dir(data5, { depth: null });