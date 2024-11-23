// MAP()

const arr = [2,4,5,6,7,8,9]

const doubledArr = arr.map((num) => {
    return num * 2;
})

console.log(doubledArr)


// example2

const person = [{
    name: 'John',
    age: 30,
    city: 'New York',
    company: 'XYZ'
},
{
    name: 'Jane',
    age: 25,
    city: 'London',
    company: 'ABC'
}
]
const details = person.map((person) => {
    return person.name 
});
console.log(details)

// example3
const fruits = ['apple', 'orange', 'mango']

const result = fruits.map((fruits,index) => {
    return `The ${index+1}th fruit is ${fruits}`
})
console.log(result)