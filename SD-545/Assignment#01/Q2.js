// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

const getNewArray = function(str){

   const new_array= str.filter(item=>item.length>=5 && item.includes('a'))
   return new_array
}
const str=['ayesha','zerwe','denie','husban','ana','saba']

const result = getNewArray(str)
console.log(result)