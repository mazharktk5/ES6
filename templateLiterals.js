// example1


// console.log("my name is mazhar ahmad 
//     my age is 24
//     my address is karachi")   show error

console.log("my name is mazhar ahmad \n\t my age is 24 \n\t my address is karachi")   // shows correct output

console.log("my name is mazhar ahmad \n\t my age is 24 \n\t my address is karachi".replace(/\t/g, ' '))   // shows correct output with spaces

console.log("my name is mazhar ahmad \n\t my age is 24 \n\t my address is karachi".replace(/\t/g, '\\t'))   // shows correct output with tab character

console.log(`my name is mazhar ahmad
    my age is 24
    my address is karachi`)   // shows correct output with line breaks


// example 2
    let name = "mazhar"
    let age = 20
    let address = "peshawer"
    console.log(`my name is ${name}
    my age is ${age}
    my address is ${address}`)   // shows correct output with variable values


    // example 3

    function area(width, height) {
        return "area" + width + "" + height + " = " + width * height
        }
        console.log(area(5, 6))   // shows correct output with function call and variable
        

function area(width, height) {
    return `area  = ${width * height}`
}

console.log(area(5, 6))   // shows correct output with function call and variable using template literals