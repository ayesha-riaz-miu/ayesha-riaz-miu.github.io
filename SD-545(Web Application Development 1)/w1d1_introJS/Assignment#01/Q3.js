// 3. Implement an arrow function with feature below:

// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const concate = (str,arr1,arr2)=>{

    return [...str,...arr1,...arr2]

}
const result = concate('hi',[1,2,3],['Hello','world'])
console.log(result)