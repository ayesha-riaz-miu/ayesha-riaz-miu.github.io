// data structure 4
// add student (if group id exist, and student_id does not exist)
// update student full name (if group id exist, and student_id exist)
// delete student (if group id exist, and student_id exist)
// read student full name by student_id, and group id (if group id exist, and student_id exist)
type Student = {
    student_id: number,
    firstname: string;
    lastname: string;
};
type Group = {
    [id: string]: Student[];
};
const data4: Group = {
    "1":[{student_id:1,firstname:"hello",lastname:"everyone"}]
};

function add_student(groupid: string, student: Student) {
    if (!data4.hasOwnProperty(groupid)) {
        data4[groupid] =[]
    }
    const stuednt_exit = data4[groupid].find(item => item.student_id == student.student_id)
    if (stuednt_exit) { return false }

    data4[groupid].push(student)
console.log(data4)

    return data4
}

function update_student(groupid:string,update_student:Student){
    if(!(data4.hasOwnProperty(groupid))) return false

    const student_exit=data4[groupid].find(item=>item.student_id==update_student.student_id)
    if(student_exit){
       const update=data4[groupid].map(item=>item.student_id==update_student.student_id)
       const new_data=structuredClone(data4)
       new_data[groupid]=[update_student]
       return new_data
      

    }

}

function delete_data(groupid:string,studentid:number){
    if(!(data4.hasOwnProperty(groupid))) return false
    const student_index=data4[groupid].findIndex(item=>item.student_id===studentid)
    if(student_index!==-1){
        data4[groupid].splice(student_index,1)
    }
    return data4
}
function find_studentname(groupid:string,id:number){
    if(!(data4.hasOwnProperty(groupid))) return false
    const student_index=data4[groupid].find(item=>item.student_id===id)
    console.log(student_index)
    if(!(student_index)) return false
    

    return [student_index.firstname,student_index.lastname]
 
 
    
}


console.log(add_student("group1", { student_id: 11, firstname: "ayesha", lastname: "riaz" }))
console.log(add_student("group1", { student_id: 12, firstname: "zarwa", lastname: "fatima" }))
console.log(add_student("group1", { student_id: 13, firstname: "dania", lastname: "riaz" }))

console.log(update_student("group1",{ student_id: 12, firstname: "zarwa fatima", lastname: "riaz" }))

console.log(delete_data("group1",13))
console.log("here",find_studentname("group1",11))
