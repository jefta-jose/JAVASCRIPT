// Type Conversion
let numberValue = 42;
let stringValue = String(numberValue);

console.log(stringValue); // Output: "42"
console.log(typeof stringValue); // Output: string

let stringNumber = "123";
let numericValue = Number(stringNumber);

console.log(numericValue); // Output: 123
console.log(typeof numericValue); // Output: number

let booleanValue = Boolean(numberValue);

console.log(booleanValue); // Output: true
console.log(typeof booleanValue); // Output: boolean

// Type Coercion
let concatResult = "Hello " + 123;

console.log(concatResult); // Output: "Hello 123"
console.log(typeof concatResult); // Output: string

let subtractionResult = "456" - 123;

console.log(subtractionResult); // Output: 333
console.log(typeof subtractionResult); // Output: number

let notOperatorResult = !0;

console.log(notOperatorResult); // Output: true
console.log(typeof notOperatorResult); // Output: boolean

// Truthy and Falsy Values
let truthyExample = 10;
let falsyExample = 0;

console.log(Boolean(truthyExample)); // Output: true
console.log(Boolean(falsyExample)); // Output: false

// Unary Operator and parseInt
let unaryOperatorResult = +"42";

console.log(unaryOperatorResult); // Output: 42
console.log(typeof unaryOperatorResult); // Output: number

let parseIntResult = parseInt("42px");

console.log(parseIntResult); // Output: 42
console.log(typeof parseIntResult); // Output: number
