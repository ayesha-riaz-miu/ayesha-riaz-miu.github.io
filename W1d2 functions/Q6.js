// 6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
// between these two points based on the formula,
// d= √(x2−x1)2 +(y2−y1)2 
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));

function  calcDistance(x1,y1,x2,y2){
    let first_part=Math.pow((x2-x1),2)
    //console.log(first_part)
    let second_part=Math.pow((y2-y1),2)
   // console.log(second_part)
    let d=(first_part+second_part)/2
return d;

}

console.log("distance between two points is:"+  calcDistance(0,0,5,5))
