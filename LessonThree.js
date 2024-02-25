// Primitive Data Types

// Number type
let regularNumber = 15;
let largeNumber = 1234567890123456789012345678901234567890n; // BigInt type

// Floating point representation
let decimalNumber = 78.8;

// typeof operator
console.log(typeof regularNumber); // Output: number
console.log(typeof decimalNumber); // Output: number
console.log(typeof largeNumber);   // Output: bigint

// Different number systems
let binaryNumber = 0b1010; // Binary: 10
let octalNumber = 0o765;   // Octal: 509
let hexNumber = 0xA2F;     // Hexadecimal: 2607

console.log(binaryNumber);  // Output: 10
console.log(octalNumber);   // Output: 509
console.log(hexNumber);     // Output: 2607

// Underscores in numbers for readability
let bigNumber = 1_000_000;
console.log(bigNumber);     // Output: 1000000

// Infinity and maximum value for numbers
let infinityValue = Infinity;
let maxValue = Number.MAX_VALUE;

console.log(infinityValue); // Output: Infinity
console.log(maxValue);       // Output: 1.7976931348623157e+308

// Adding a BigInt to a regular number
let regularInt = 42;
let bigIntValue = 9007199254740991n;

// Convert regular number to BigInt
let result = BigInt(regularInt) + bigIntValue;
console.log(result);         // Output: 9007199254741033n
