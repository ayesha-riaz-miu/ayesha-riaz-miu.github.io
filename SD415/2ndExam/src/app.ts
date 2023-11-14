
import { Console } from "console";
import { type } from "os";

// Question1:
// type NameObject= {
//     firstName: string;
//     lastName: string;
// }

// export function firstLast(names:string[]):NameObject[]{
//     return names.map(names=>{
//         let[firstName,lastName]=names.split(' ')
//         return {firstName,lastName}
//     })
// }

// let names = ["Fred Smith", "Carl Lindstrom"];
// //console.log(firstLast(names));


//Question2:
// function replaceEnd(arr:number[]):void{
//     let new_array=arr.slice()
//     let result=new_array.splice(0,2,10,9)
//     let result1=new_array.splice(4,2,8,7)
//     console.log(new_array)
// }
// let arr=[5,4,3,2,1,0]
// console.log(replaceEnd(arr))

//Question3:
// function square(numArr1:number[]):number[]{
//     let result=[];
//     let index=0
//     for(let num of numArr1){
      
//         result[index]=num*num
//         index++

//     }
//     //console.log(result)
//     return result
   
// }
// function higho(square:()=>number[],numArr1:number[]):number[]{

//     let square_number=square()

// return square_number
// }

// const numArr1 = [1, -2, 3];
// const numArr2 = [-1, 4, -10];
// console.log(higho(square,numArr1))

//Question:4
type Sessions={
    userId:number,
    duration:number
}
type days={
    sessiond:Sessions[],
    date:string
}
const session1 = { userId: 1, duration: 60 };
    const session2 = { userId: 2, duration: 45 };
    const session3 = { userId: 2, duration: 30 };
    const session4 = { userId: 3, duration: 15 };
    const session5 = { userId: 3, duration: 75 };
    const day1 = { sessions: [session1, session2], date: "01/10/2022" };
    const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
    const dailyRecord = [day1, day2];
     //part(a)
function calculateDailyDuration1(sessions:Sessions[]):number{
let sum=0;
    //for(const value of sessions)
    for(let i=0;i<sessions.length;i++){
    sum= sum+sessions[i].duration
}
    return sum

    
}
function calculateDailyDuration2(sessions:Sessions[]):number{
    let sum=0;
        //for(const value of sessions)
        for(let i=0;i<sessions.length;i++){
        sum= sum+sessions[i].duration
    }
        return sum
        
    }
   //part(b)
function calculateTotalDuration(dailyRecord:any):number{

   let result=calculateDailyDuration1(day2.sessions)+calculateDailyDuration2(day1.sessions)
    
return result
}
// function getAllSessions(dailyRecord:any):void{
  
//   let allSessions=
//   console.log(allSessions)
  
// }
  //part(c)
function getAllSessions(dailyRecord: any): any[]{
    let allSessions=day1.sessions.concat(day2.sessions)

    
    return allSessions;
  }
    //part(d)

    function getAllSessionsForUser(dailyRecord:any):void{
     let allSessions=day1.sessions.concat(day2.sessions)
    let filter=allSessions.filter(session=>session.userId==2)
        console.log(filter)
    
    }

   // part(e)
   function getAllDurations(dailyRecord:any):void{
    let allSessions=day1.sessions.concat(day2.sessions)
    let filter=allSessions.filter(allSessions=>allSessions.duration)
    console.log(filter)


   }
    console.log(calculateDailyDuration1(day2.sessions))
    console.log(calculateDailyDuration2(day1.sessions))
    console.log(calculateTotalDuration(dailyRecord));
    console.log(getAllSessions(dailyRecord));
    console.log(getAllSessionsForUser(dailyRecord))
    console.log(getAllDurations(dailyRecord));

