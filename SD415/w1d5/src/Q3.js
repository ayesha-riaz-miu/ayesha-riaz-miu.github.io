// 3. Write a function, myMap, that takes an array and a function and returns a new array that has the function 
// applied to each element of the input array. Use your myMap function with your double and times100 functions.
export function times100(arr){

    let result=0
    result=arr*100
    return result;
  }
function mymap(arr,result){
    let newarray=[];
    for(let i=0;i<arr.length;i++){
        newarray.push(result(arr[i]))
    }

}
let arr=[1,2,3,4,]
console.log(mymap(arr,times100(arr)))