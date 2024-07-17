console.log("Hello World!")

// This is a comment.
/* This is a comment. */

function sayHello() {
    let name = "Tristan"; // String
    let age = 21; // Number
    let birthday = true; // Boolean
    let variable; // Undefined
    let sample = null; // Object

    let x = 5;
    let y = 10;
    let sum = x + y;
    let diff = x - y;
    let product = x * y;
    let quotient = x / y;
    let remainder = x % y;

    console.log(typeof(sample))
    console.log(sum, diff, product, quotient, remainder);
}

sayHello();

function stringExpression() {
    console.log("Hello", "World" + "!")
}

stringExpression();

function logicalExpression() {
    let sunny = true;
    let warm = false;

    console.log("Sunny and Warm", sunny && warm)
    console.log("Sunny or Warm", sunny || warm)
    console.log("Not Sunny", !sunny)
}

logicalExpression();

function assignmentExpression() {
    let a = 10;
    let b = 5;

    a+=b;
    console.log("a:", a);

    a-=b;
    console.log("a:", a);

    a*=b;
    console.log("a:", a);

    a/=b;
    console.log("a:", a);
}

assignmentExpression();

function functionCall(num1, num2, num3) {
    console.log(num1 + num2 + " " + num3);
}

functionCall(5, 10, "String");

let age = 16;
if(age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote!");
}

let temperature = 26;
if(temperature < 0) {
    console.log("It is below the freezing point!");
} else if(temperature >= 0 && temperature < 20) {
    console.log("It is cool outside!");
} else {
    console.log("It is warm outside!")
}

let day = "Monday"
switch(day) {
    case "Monday":
        console.log("It is the start of the week!");
        break;
    case "Tuesday":
        console.log("It is the second day of the week!");
        break;
    case "Wednesday":
        console.log("It is the third day of the week!");
        break;
    case "Thursday":
        console.log("It is the fourth day of the week!");
        break;
    case "Friday":
        console.log("It is the fifth day of the week!");
        break;
    default:
        console.log("It is the weekend!");
}

for(let index = 0; index <= 10; index++) {
    console.log("Count:", index)
}

let count = 1;
while(count <= 5) {
    console.log("Count:", count);
    count ++;
}

let i = 8;
do {
    console.log("Do While Count:", i);
    i++;
} while (i <= 5);

let fruit = ["Avocado", "Apple", "Dragon Fruit", "Orange"];
console.log("First Fruit:", fruit[0]);
console.log("Second Fruit:", fruit[1]);
console.log("Last Fruit:", fruit[fruit.length - 1]);
fruit[1] = "Mango";
console.log(fruit);
console.log("The Updated Second Fruit:", fruit[1]);
fruit.push("Banana"); // Add an element to the end of the array.
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.splice(3, 1);
console.log(fruit);

let number = [1, 2, 3, 4, 5];
for(let index = 0; index < 5; index++) {
    console.log(number[index]);
}

// forEach method
fruit = ["Rasberry", "Durian", "Strawberry", "Kiwi", "Melon"];
console.log(fruit);
fruit.forEach(function(fruit) {
    console.log(fruit);
})
fruit.forEach(fruit => {
    console.log(fruit);
})

let color = ["Red", "Green", "Blue"];
console.log("Array Length:", color.length); // length
console.log("Index of 3:", color.indexOf(3)); // indexOf
console.log("Include Green:", color.includes("Green")); // includes
console.log("Joined Array:", number.join(", ")); // join

let slicedArray = color.slice(0,2);
console.log(slicedArray); // slice

let removedElement = color.splice(0,2);
console.log("Removed Element:", removedElement); // splice
console.log("Updated Array:", color);

// Object Literals
// Step 1: Create object literal
const person = {
    // Step 2: Add properties
    firstName: "Jimmu",
    lastName: "Pogi",
    age: 21,
    hobbies: ['reading', 'traveling', 'playing'],

    //Step 3: Add a method to the object
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    }
}

//Step 4: Accessing object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies[1]);

//Step 5: Modifying object properties
person.lastName = "Ducas";
console.log(person.lastName);
person.age = 22;
console.log(person.age);

// Step 6: Accessing object methods
person.greet();

// Step 7: Adding new properties to the object
person.nationality = "Filipino";
console.log(person.nationality);

// Step 8: Adding new methods to the object.
person.introduce = function(){
    console.log(`I am ${this.age} years old.`);
}
person.introduce();

// Step 9: Nesting Objects
const address = {
    country: "Japan",
    city: "Legazpi",
    street: "123 Street",
}

person.address = address;
console.log(person.address.country);
console.log(`I am`, person.firstName, person.lastName, `who is`, person.age, `years old. I live in`, person.address.street, person.address.city, "and it is nice to meet you!");