// // // MAP()

// // const arr = [2,4,5,6,7,8,9]

// // const doubledArr = arr.map((num) => {
// //     return num * 2;
// // })

// // console.log(doubledArr)


// // // example2

// // const person = [{
// //     name: 'John',
// //     age: 30,
// //     city: 'New York',
// //     company: 'XYZ'
// // },
// // {
// //     name: 'Jane',
// //     age: 25,
// //     city: 'London',
// //     company: 'ABC'
// // }
// // ]
// // const details = person.map((person) => {
// //     return person.name 
// // });
// // console.log(details)

// // // example3
// // const fruits = ['apple', 'orange', 'mango']

// // const result = fruits.map((fruits,index) => {
// //     return `The ${index+1}th fruit is ${fruits}`
// // })
// // console.log(result)




// // 2. filter( )
// // This method creates a new array with only elements that passes the condition inside the provided function.

// // example1

// // const arr = [2,4,5,6,7,8,9]
// // const evenArr = arr.filter((arr) => {
// //     return arr % 2 === 0
// // })

// // console.log(evenArr)



// // // example2

// // const students = [
// //     { name: "Alice", score: 85 },
// //     { name: "Bob", score: 72 },
// //     { name: "Charlie", score: 90 },
// //     { name: "David", score: 65 },]

// //     const passedStudents = students.filter((student) => {
// //         return student.score >= 80
// //     })
// //     console.log(passedStudents)


// // 3. sort( )
// // This method is used to arrange/sort array’s elements either in ascending or descending order.

// // example1
// // const arr = [9,4,7,10,5,8,2]
// // const sortedArr = arr.sort((a,b) => {
// //         return a - b
// //     })
// //     console.log(sortedArr)


// // example2
// // const arr1 = [9,4,7,10,5,8,2]
// // arr1.sort();

// // console.log(arr1) 

// // // example3

// // const students = [
// //     { name: "Alice", score: 85 },
// //     { name: "Bob", score: 72 },
// //     { name: "Charlie", score: 90 },
// //     { name: "David", score: 65 },
// //   ];
// //   students.sort((a, b) => {
// //     return b.score - a.score;
// //   });
// //   console.log(students);


// // 4.forEach( )
// // This method helps to loop over array by executing a provided callback function for each element in an array.

// // example1
// // const numbers = [1, 2, 3, 4];
// // numbers.forEach(num => console.log(num * 2));
// // console.log(numbers)

// // example2

// // const fruits = ['mango','apple','orange']
// // fruits.forEach((fruit) => {
// //     console.log(fruit)
// //     })

// // example3
// // const students = [
// //     { name: "Alice", score: 85 },
// //     { name: "Bob", score: 72 },
// //     { name: "Charlie", score: 90 },
// //     { name: "David", score: 65 },
// //   ];
  
// //   students.forEach((student) => {
// //     console.log("passed :",student.score >= 80) 
// //   });



// // every( )
// // This method checks every element in the array that passes the condition, returning true or false as appropriate.

// // example1

// // const numbers = [1, 2, 3, 4];
// // result = numbers.every((num)=>{
// //     return num  > 0
// // }); 
// // console.log(result)


// // example2

// // const students = [
// //     { name: "Alice", score: 85 },
// //     { name: "Bob", score: 78 },
// //     { name: "Charlie", score: 92 },
// //     { name: "David", score: 88 },
// //   ];
  
// //   const allPassed = students.every(student => student.score >= 60);
// //   console.log(allPassed);

// // CONCAT

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const arr3 = arr1.concat(arr2)
// // console.log(arr3)

// // example2

// // const arr1 = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
// // const arr2 = [{name: 'Charlie', age: 35}, {name: 'sara',age: 40}];
// // const arr3 = arr1.concat(arr2)
// // console.log(arr3)



// // const myPromise = new Promise((resolve, reject) => { 
// // 	if (Math.random() > 0) { 
// // 		console.log('resolving the promise ...'); 
// // 		resolve('Hello, Positive :)'); 
// // 	} 
// // 	reject(new Error('No place for Negative here :(')); 
// // }); 

// // const Fulfilled = (fulfilledValue) => console.log(fulfilledValue); 
// // const Rejected = (error) => console.log(error); 
// // myPromise.then(Fulfilled, Rejected); 

// // myPromise.then((fulfilledValue) => { 
// // 	console.log(fulfilledValue); 
// // }).catch(err => console.log(err));



const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data...");
        console.log("--------- PLease wait -----------");
        setTimeout(() => { 
            const success = Math.random() > 0.3; 
            if (success) {
                resolve([{
                    id: 1,
                    name: "Mazhar Ahmad",
                    email: "mazhar@example.com"
                },
                     {
                    id: 2,
                    name: "John Doe",
                    email: "john@example.com"
                },
            {
                    id: 3,
                    name: "Jane Smith",
                    email: "jane@example.com"
            
            },
        {
                   id: 4,
                   name: "Alice Johnson",
                   email: "alice@example.com"
        }]);
            } else {
                reject(new Error("Failed to fetch user data! Please try again."));
            }
        }, 2000);
    });
};


fetchUserData()
    .then((userData) => {
        console.log("User data retrieved successfully:");
        console.log(userData); 
    })
    .catch((error) => {
        console.error("An error occurred:");
        console.error(error.message); 
    });







  
 





