

// Question:2


// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev

class Meditation{
   constructor(private num:number){

   }
   start(){
       console.log('Start meditation')
       let id= setInterval(()=>{
           console.log(this.num)
           this.num--
           if(this.num==0){
               clearInterval(id)
               console.log('end meditation')
           }
           
       },1000)
       
       
      
   }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();







// Question:1

// // Start
// // End
// // hello
// // async

console.log(`Start`);
class AsyncArray<T>{
   constructor(private data:T[]){
   }
   forEach(callback:Function){
    setTimeout(()=>{
        for(let i=0;i<this.data.length;i++){
            callback(this.data[i])

       }

    },0)
       
   }

}
const asyncArray = new AsyncArray<string>(["hello", "async"]);
asyncArray.forEach(console.log);
console.log(`End`);




