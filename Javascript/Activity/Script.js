// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
console.log("Step 1");
function isEven(number) {
    return number % 2 === 0 && number > 0;
} 

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
console.log("Step 2");
for(let i = 0; i <= 10; i++) {
    console.log(i + " is even: " + isEven(i) + ".");
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
console.log("Step 3");
function multiply(num1, num2) {
    let product = num1*num2;
    return product;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
console.log("Step 4");
let x = 10; y = 2;
let z = 0
while (z < 5) {
    console.log(`The product of ${x} and ${y} is:`, multiply(x, y) + ".");
    z++;
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
console.log("Step 5");
function reversedString(string) {
    console.log(`The reverse of the string ${string} is:`, string.split("").reverse().join("") + ".");
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log("Step 6");
reversedString("hello");

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
console.log("Step 7");
function countVowels(string) {
    vowels = ["a", "e", "i", "o", "u"];
    string = string.toLowerCase();
    let count = 0;
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log("Step 8");
console.log(`The vowels counted was:`, countVowels("JavaScript") + ".");

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
console.log("Step 9");
function findMax(array) {
    array = Math.max(...array);
    return array;
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log("Step 10");
let array = [4, 9, 2, 7, 5];
console.log(`The maximum value of ${array} is:`, findMax(array) + ".");

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
console.log("Step 11");
function calculateFactorial(x) {
    let term = x;
    let factorial = 1;
    while(x > 0) {
        factorial *= x;
        x--;
    }
    let result = console.log(`The factorial of ${term} is:`, factorial + ".")
    return result;
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log("Step 12");
calculateFactorial(5);

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
console.log("Step 13");
function isPalindrome(palindrome) {
    console.log(`The palindrome of the string ${palindrome} is:`, palindrome.split("").reverse().join("") + ".");
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log("Step 14");
isPalindrome("level");

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
console.log("Step 15");
function sumArray(array) {
    let i = 0;
    let j = array.length;
    let sum = 0;
    while (i < j) {
        sum += array[i];
        i++;
    }
    console.log(`The sum of all numbers in the array ${arr} is:`, sum);
}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log("Step 16");
let arr = [1, 2, 3, 4, 5];
sumArray(arr);

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
console.log("Step 17");
function capitalizedFirstLetter(string) {
    a = string.slice(0,1).toUpperCase();
    b = a + string.slice(1, string.length);
    console.log(`The first letter capitalization of the string ${string} is`, b + ".");
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log("Step 18");
capitalizedFirstLetter("hello");

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
console.log("Step 19");
function filterEvenNumbers(array) {
    let evenNumbers = [];
    for(let index = 0; index < array.length; index++) {
        if(array[index] % 2 === 0 && array[index] > 0) {
            evenNumbers.push(array[index]);
        }
    }
    return evenNumbers;
}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(arr));