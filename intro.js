// this is how to print in js
// console.log("hello")

// we want to see how to create variables

// we can assign a variable with my name with let which allows us to change it 
let name = "Eddie";

// we can assign variables that won't be changed with const 
const age = 24;     

// this is another way to initialize a variable but it's am older way
var city = "New York"; 

// we can print all of this out
// console.log(name, age, city);

// try to reassign const, this will show an error
// age = 22
// console.log(age);

// now we have different data types

// we can assign numbers
let number = 10; 
let num = 0.1;

// we have strings
let text = "Hello";   

// we can have booleans
let isCool = true;     

// we can even assign null
let something = null;  

// we can even not assign nothing
let notDefined;  

// we create arrays such as 
let arr = [1, 2, 3];   

// we can create objects where we can access the name and age
let obj = { name: "Eddie", age: 24 };

// console.log(obj.name);

// we also have functions
// where we can set the paramaters that we will pass 
function greet(name, message) {
    return "Hello, " + name + "!" + " You are " + message + ".";
}

// console.log(greet("Eddie", "old"));

// we can see the addition and subtration opertaions
let y = 0.83
let x = 3

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)

// we also have if statements
let n = 18;
if (n >= 18) {
    //console.log("You are an adult.");
} else {
    //console.log("You are a minor.");
}

// we have both for loops and while loops
for (let i = 0; i < 5; i++) {
    // console.log("Number:", i);
}

let count = 0;
while (count < 3) {
    // console.log("Count:", count);
    count++;
}

// as said we have arrays
let colors = ["Red", "Green", "Blue"];
// console.log(colors[0]);  // "Red"
colors.push("Yellow");   // Add to the end
// console.log(colors);

// we can iterate over our array 
let found = false

for(let i = 0; i < colors.length; i++){
    if(colors[i] == "Blue"){
        //console.log("Blue is at index " + i);
        found = true
        break
    }
}

// if(!found) console.log("Blue not found")

// we also have objects as said 
let person = {
    name: "Eddie",
    age: 24,
    city: "New York"
};

// console.log(person.city);  


