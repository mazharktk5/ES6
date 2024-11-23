// // MAP()

// const arr = [2,4,5,6,7,8,9]

// const doubledArr = arr.map((num) => {
//     return num * 2;
// })

// console.log(doubledArr)


// // example2

// const person = [{
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     company: 'XYZ'
// },
// {
//     name: 'Jane',
//     age: 25,
//     city: 'London',
//     company: 'ABC'
// }
// ]
// const details = person.map((person) => {
//     return person.name 
// });
// console.log(details)

// // example3
// const fruits = ['apple', 'orange', 'mango']

// const result = fruits.map((fruits,index) => {
//     return `The ${index+1}th fruit is ${fruits}`
// })
// console.log(result)




// 2. filter( )
// This method creates a new array with only elements that passes the condition inside the provided function.

// example1

// const arr = [2,4,5,6,7,8,9]
// const evenArr = arr.filter((arr) => {
//     return arr % 2 === 0
// })

// console.log(evenArr)



// // example2

// const students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 72 },
//     { name: "Charlie", score: 90 },
//     { name: "David", score: 65 },]

//     const passedStudents = students.filter((student) => {
//         return student.score >= 80
//     })
//     console.log(passedStudents)


// 3. sort( )
// This method is used to arrange/sort array’s elements either in ascending or descending order.

// example1
// const arr = [9,4,7,10,5,8,2]
// const sortedArr = arr.sort((a,b) => {
//         return a - b
//     })
//     console.log(sortedArr)


// example2
// const arr1 = [9,4,7,10,5,8,2]
// arr1.sort();

// console.log(arr1) 

// // example3

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 72 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 65 },
  ];
  students.sort((a, b) => {
    return b.score - a.score;
  });
  console.log(students);

