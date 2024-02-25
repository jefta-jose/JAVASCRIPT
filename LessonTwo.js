// Declare a constant variable for pi
const pi = 3.14;

// Declare a variable for the radius
let radius = 5;

// Calculate the area of the circle using the formula: area = pi * radius^2
const area = pi * Math.pow(radius, 2);

// Print the result
console.log("The area of the circle with radius", radius, "is:", area);

// Attempt to change the value of pi
// This will result in an error because pi is declared as a constant
// Uncommenting the line below will cause an error
// pi = 322;

// Attempt to change the value of pi to 5
// This will also result in an error because you cannot reassign a constant variable
// Uncommenting the line below will cause an error
// const pi = 5;

// Error handling and debugging
try {
  // Uncommenting the line below will cause an error
  // const pi = 5;
} catch (error) {
  console.error("Error:", error.message);
  console.log("Learn how to read and solve errors, and use resources like Stack Overflow for help.");
}
