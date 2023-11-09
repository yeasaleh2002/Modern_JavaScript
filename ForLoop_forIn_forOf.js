// for loop is a block scope

for(let i = 0; i <= 5; i++){
    // console.log(i);
};

// for in work like object iterations. for in will check myObje and store in the property. it will return properties. 
// if for in used in the array, then return the indexs

const myObj = {
    name: "javascript",
    estd: "1995",
    founder: "Brendan Eich"
};

for(property in myObj){
    console.log(property);
};

// for of
// it will return element of an array
// we can check stirng also. it will return all the element as single value

const myArray = [1, 2, 3, 4, 5];
const myString = "Javascipt is a emotions";

for(element of myArray){
console.log(element);
};

for(element of myString){
    console.log(element);
}