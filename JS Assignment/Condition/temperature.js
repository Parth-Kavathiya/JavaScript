// (13). Convert temperature Fahrenheit to Celsius? (Conditional logic Question) 

// JavaScript program to convert Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit) {
    // Check if the input is a number
    if (typeof fahrenheit !== 'number') {
        return 'Error: Input must be a number';
    }

    // Check if the input is within a valid range
    if (fahrenheit < -459.67) {
        return 'Error: Temperature cannot be lower than absolute zero (-459.67°F)';
    }

    // Convert Fahrenheit to Celsius
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2); // Round to 2 decimal places
}

// Test the function
let fahrenheit = 80;
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius}°C`);

fahrenheit = -500;
celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius}°C`);
