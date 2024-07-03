// (12). WAP to convert years into days and days into years?    

// JavaScript program to convert years into days and days into years

function yearsToDays(years) {
    // Convert years into days
    let days = years * 365;
    return days;
}

function daysToYears(days) {
    // Convert days into years
    let years = days / 365;
    return years;
}

// Test the functions
let years = 5;
let days = yearsToDays(years);
console.log(`${years} years is equal to ${days} days`);

let daysInput = 1825;
let yearsOutput = daysToYears(daysInput);
console.log(`${daysInput} days is equal to ${yearsOutput} years`);