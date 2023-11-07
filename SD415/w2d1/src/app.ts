
import { reverse } from "dns";
import { type } from "os";

// ➢ Create 3 objects, student1, student2, student3
// ➢ property studentId : 101, 102, 103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢ push the students into an array, quizAnswers
// ➢ write a function to compute the score for a given student
// ➢ computeStudentScore(student1, [3, 1, 2, 4]) should return 3
// ➢ second argument is array of correct answers

type student = {
    studentId:number,
    quizAnswer:number[]
  }
  
  const student1={
    studentId:101,
    quizAnswer:[1,1,2,4]
  };

  const student2={
    studentId:102,
    quizAnswer: [2, 1, 2,2]
  
  };
  const student3={
    studentId:103,
    quizAnswer:[3, 1, 3,4]
  
  };
  let number1=computeStudentScore(student1, [3, 1, 2, 4])
  let number2=computeStudentScore(student2, [3, 1, 2, 4])
  let number3=computeStudentScore(student3, [3, 1, 2, 4])
 
  
  console.log("expexted 3",number1)
  console.log("expexted 2",number2)
  console.log("expexted 3",number3)
  
  export function computeStudentScore( stu:student, quizKey:number[]):number{
  
    const answer=stu.quizAnswer;
    //answer=[1,1,2,4]
     //answer=[2, 1, 2,2]
        //answer=[3, 1, 3,4]
let array:number[]=[]
let index=0
    let numCorrect=0;
    for(let i=0;i < answer.length ; i++){
     if(answer[i] === quizKey[i]){
        numCorrect=numCorrect+1;
        // array[index]= numCorrect
        // index++;
      
     }
   
    }
    return numCorrect;

  }
  student2;
  student3;
  // function gradequiz(array:number[],func:(stu:student,quizKey:number[])=>number):number[]{
  //   let newarray:number[]=[];
  //   let index=0

  //         for(let i=0;i<array.length;i++){
  //           newarray[index]=
  //         }
     

  //   return 0;
  // }
  
 
  
  // function gradequiz(array:quiz[]):void{
  //   let newarray=[];
  //   for(let i=0;i<array.length;i++){
  //         newarray[i]=array[i]
        

  //   }
  //   console.log(newarray)
  //   //return newarray;
  // }


  type quiz={
    number1:number;
    number2:number;
    number3:number;

  }
   let array=[number1,number2,number3]
   
  
 console.log(array)
  
  