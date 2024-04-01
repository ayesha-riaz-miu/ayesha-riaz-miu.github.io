// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.


function sum(arr){

return arr.reduce((acum,current,index,array)=>{
    console.log(acum,current,index,array)
    if(current>20){
        return acum+current;
    }
    else
    return acum
    },0) 

}
const arr=[20,10,30,15,5,8,50,30]
console.log(sum(arr))








