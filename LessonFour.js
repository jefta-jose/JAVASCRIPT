// String Data Type
let firstName = "John";
let lastName = 'Doe';

// Concatenation
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: John Doe

// Escaping characters
let doubleQuotesString = "He said, \"Hello!\"";
console.log(doubleQuotesString); // Output: He said, "Hello!"

// Other escape characters
let multiLineString = "This is a multi-line\nstring with a new line.";
console.log(multiLineString);

// Boolean Data Type
let isTrue = true;
let isFalse = false;

// Checking conditions
if (isTrue) {
  console.log("It's true!");
} else {
  console.log("It's false!");
}

// typeof operator
console.log(typeof firstName); // Output: string
console.log(typeof isTrue);    // Output: boolean

// Null and Undefined
let nullValue = null;
let undefinedValue;

console.log(nullValue);      // Output: null
console.log(typeof nullValue); // Output: object

console.log(undefinedValue);  // Output: undefined
console.log(typeof undefinedValue); // Output: undefined

// Typeof with mathematical operation
let result = "5" - 3;
console.log(result);           // Output: 2
console.log(typeof result);    // Output: number
