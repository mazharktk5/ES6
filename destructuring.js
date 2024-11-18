

let arr = [1,4,5,6,8,9,7]
// let [a,b,c] = arr
console.log(arr)
// console.log(a,b,c)

// let [a,b,c,...rest]=arr


// console.log(a,b,c)
// console.log(a,b,c,rest)




let obj1 = {
    name:"John",
    age:30,
    city:"New York",
    company: "xyz",
}

let obj2 = {...obj1}
console.log(obj2)
console.log({...obj1, company: "abc"})





// // spread operator
// arr = [2,4,5,6]

// function sum(a, b,c,d) {
//     return a + b + c + d;
//     }
    
// console.log(sum(...arr)); // Outputs: 15