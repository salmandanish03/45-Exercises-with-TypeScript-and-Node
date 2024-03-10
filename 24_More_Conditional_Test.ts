
// Tests for equality and inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// Tests for equality and inequality Test 2
console.log("inequality test with strings: ", ("Apple" as string) != "Orange");

// Tests using the Lower case function Test 3
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality
console.log("Equality test with number: ", 1984 === 1984);

// Numerical tests involving inequality, 
console.log("Inequality test with number: ", (1984 as number) != 84);

// greater than test
console.log("Greater than test: ", 1984 > 84);

// greater less than test
console.log("Less than test: ", 84 < 1984);

// greater than or equal to 
console.log("Greater than and equal to test: ", 1984 >= 1984);

// and less than or equal to
console.log("less than or equal to test: ", 84 <= 1984);

// Tests using "and" operators
console.log("And operator test: ", 84 === 84 && 1984>84);

// Tests using "or" operators
console.log("Or operator test: ", 84 === 84 || false);

// Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Orange']
console.log('Test "Nashpati" in the array; ', fruits.includes("Nashpati"));

// Test whether an item is not in a array
console.log('Test "Apple" is not in Array; ', !fruits.includes("Apple"));

