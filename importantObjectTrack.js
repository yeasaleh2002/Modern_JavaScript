// If we need only key from a object. then we can use Object.keys
// if we need only values from a object. then we can use Object.values
// if we want keys and values both then we can use Object.entries
// those method will return an array. entries will return array and key and values in an another array
// here, if key and values are same, then we can pass like a key then comma, example: x: x to only x
// if we want to add element in the object, then we can use Object.assign

const myObj = {
    name: "javascript",
    estd: "1995",
    founder: "Brendan Eich"
};

var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);
console.log(keys);
console.log(values);
console.log(entries);

// object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }