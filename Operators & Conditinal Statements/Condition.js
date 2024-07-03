// (10). What is Condition Statement? 

// A condition statement, also known as a conditional statement, is a statement in a programming language that executes different blocks of code based on a specific condition or set of conditions. It allows the program to make decisions and take different actions depending on the outcome of the condition.

// If statement
let x = 5;
if (x > 10) {
    console.log("x is greater than 10");
}

// If-else statement
let y = 20;
if (y > 10) {
    console.log("y is greater than 10");
} else {
    console.log("y is less than or equal to 10");
}

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

// Ternary operator
let isAdmin = true;
let message = isAdmin ? "You are an admin" : "You are not an admin";
console.log(message);