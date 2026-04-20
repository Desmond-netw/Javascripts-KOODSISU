/*
Functional requirements
Character escaping is essential when working with strings that contain special characters. In JavaScript, we use the backslash (\) to escape characters that would otherwise be interpreted differently. For example:

\n creates a new line
\" allows double quotes inside a string
\\ allows a literal backslash
This is particularly important when working with file paths.

Create a program that demonstrates character escaping in JavaScript by printing a string containing special characters. When run, it should output a properly escaped string.

*/

// Solution
console.log("This is a string containing special characters:\nNew Line,\n \"Double Quotes\",\n \\Backslash\\");