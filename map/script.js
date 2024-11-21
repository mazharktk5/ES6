// map
// const arr = [13,54,32,12,7,4,15]

// const doubledArr = arr.map((value)=>{
//     return value + 1;
// })
// console.log(doubledArr);


// 

const arr2 = [13,54,32,12,7,4,15]
const doubledArr = arr2.filter((value)=>{
    return value % 2 === 0;
})

console.log("the result of double array filter is :"+doubledArr);

// reduce

const arr1 = [13,54,32,12,7,4,15]
const sum = arr1.reduce((acc, value) => {
    return acc + value;
}, 0)

console.log( "The sum is :" +sum);

// for each

const arr = [13,54,32,12,7,4,15]
arr.forEach((x) => {
    console.log(x);
    })
