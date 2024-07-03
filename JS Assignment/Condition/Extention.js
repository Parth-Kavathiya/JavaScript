// (14). Write a JavaScript exercise to get the extension of a filename.?

// JavaScript exercise to get the extension of a filename

function getExtension(filename) {
    // Check if the input is a string
    if (typeof filename !== 'tring') {
        return 'Error: Input must be a string';
    }

    // Check if the input contains a dot (.)
    let dotIndex = filename.lastIndexOf('.');
    if (dotIndex === -1) {
        return 'Error: Filename does not have an extension';
    }

    // Extract the extension
    let extension = filename.substring(dotIndex + 1);
    return extension;
}

// Test the function
let filename = 'example.txt';
let extension = getExtension(filename);
console.log(`The extension of ${filename} is ${extension}`);

filename = 'example';
extension = getExtension(filename);
console.log(`The extension of ${filename} is ${extension}`);

filename = 123;
extension = getExtension(filename);
console.log(`The extension of ${filename} is ${extension}`);