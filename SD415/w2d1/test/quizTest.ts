/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

// import { StudentQuiz, gradeStudent, gradeQuiz, gradeQuizLabeled } from "../src/quiz.js";  //import all of the app.js functions used in the Mocha tests

import{computeStudentScore} from "../src/app.js"; 
describe("quiz tests", function () {

    const student1 = {
        studentId: 101,
        quizAnswer: [1, 1, 2, 4]
    }

    const student2 = {
        studentId: 102,
        quizAnswer: [2, 1, 2, 2]
    }

    const student3 = {
        studentId: 103,
        quizAnswer: [3, 1, 3, 4]
    }
    const CORRECT_ANSWERS = [3, 1, 2, 4];
     //const studentQuizzes: StudentQuiz[] = [student1, student2, student3];

   
    it("gradeStudent -- grade for 1 student", function () {
        //assert.deepEqual(computeStudentScore(student1. quizAnswer, CORRECT_ANSWERS), 3);
    });




});