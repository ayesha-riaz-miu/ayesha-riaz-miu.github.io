// data structure 6
// add course (if course id does not exist)
// update course title (if course id exist)
// delete course (if course id exist)
// read course title by course id (if course id exist)
// add student in course (if course id exist, and student_id does not exist)
// update student full name in course (if course id exist, and student_id exist)
// delete student from a course (if course id exist, and student_id exist)
// read student full name by student_id, and course id (if course id exist, and student_id exist)
type Student1 = {
    student_id: number,
    firstname: string;
    lastname: string;
};
type Course = {
    [id: string]: {
        title: string,
        students: Student1[]
    };
};


const data6: Course[] = [
    {
        course1: { title: "javascript", students: [] }
    }];


function add_course(courseId: string, courseTitle: string): boolean {
    const course_exit = data6.find(item => item.hasOwnProperty(courseId))
    if (course_exit) return false
    const new_course = {
        [courseId]: {
            title: courseTitle,
            students: []
        }
    };

    data6.push(new_course);
    return true
}
function updateCourse_title(courseId: string, title: string): boolean {
    const find_courseId = data6.find(item => item.hasOwnProperty(courseId))
    console.log(find_courseId)
    if (!find_courseId) return false

    find_courseId[courseId].title = title
    return true

    //const update_data=data6.map(item=>item.hasOwnProperty(courseId))
}
function deleteCourse(courseId: string): boolean {
    const find_courseId = data6.find(item => item.hasOwnProperty(courseId))


    if (!find_courseId) return false

    const index = data6.findIndex(item => item.hasOwnProperty(courseId))
    console.log(index)
    data6.splice(index, 1)
    return true
}
function readcourse_title(course_id: string): boolean | any {
    const find_courseId = data6.find(item => item.hasOwnProperty(course_id))
    console.log(find_courseId)

    if (!find_courseId) return false

    const data = find_courseId[course_id].title

    return data

}
function addstudent(courseId: string, new_studend: Student1): boolean {

    const findcourse_id = data6.find(item => item.hasOwnProperty(courseId))
    //console.log('dd',findcourse_id)

    if (!findcourse_id) return false
    const findstudent_id = findcourse_id[courseId].students.find(students => students.student_id == new_studend.student_id)

    findcourse_id[courseId].students.push(new_studend)
    return true

}
function update_student(courseId: string, id: number, firstname: string, lastname: string): boolean {

    const find_courseId = data6.find(item => item.hasOwnProperty(courseId))
    console.log("hello", find_courseId)
    if (!find_courseId) return false
    const findstudent_id = find_courseId[courseId].students.find(students => students.student_id == id)
    let update = find_courseId[courseId].students.map(student => {
        if (student.student_id == id) {
            student.firstname = firstname
            student.lastname = lastname
        }
    })


    return true
}
function delete_student(courseId: string, id: number): boolean {
    const find_courseId = data6.find(item => item.hasOwnProperty(courseId))
    if (!find_courseId) return false
    const findstudent_index = find_courseId[courseId].students.findIndex(students => students.student_id == id)

    if (findstudent_index != -1)
        find_courseId[courseId].students.splice(findstudent_index, 1)
    return true
}

function readstudent_name(courseId: string, id: number) {
    const find_courseId = data6.find(item => item.hasOwnProperty(courseId))

    if (!find_courseId) return false
    const findstudent_id = find_courseId[courseId].students.find(students => students.student_id == id)
    console.log("qq", findstudent_id)
    // if(!find_courseId) return false
    console.log("firtsname:", findstudent_id?.firstname)
    console.log("firtsname:", findstudent_id?.lastname)
    return true

}



add_course("course2", "c++")
console.log(data6)
updateCourse_title("course2", "c/c++")
console.log(data6)
deleteCourse("course2")
console.log("after delete", data6)
readcourse_title("course1")
console.log(readcourse_title("course1"))
addstudent("course1", { student_id: 1, firstname: "ayesha", lastname: "riaz" })
console.dir(data6, { depth: null });
update_student("course1", 1, "M", "husban")
console.dir(data6, { depth: null });


console.log(readstudent_name("course1", 1))
delete_student("course1", 1)
console.log("after")
console.dir(data6, { depth: null });

