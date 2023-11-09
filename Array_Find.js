// Array.prototype.find(); 
// find will check full array, if it get true result then it will stop the  checking and it will return this true values. In the find method parameter should be function, which will check all the elements in the array by parameter function. It will not change main array. * * this find will get, currentValue(which will be true 1st one), currentIndex, mainArray. 
var numbers = [1, 2, 3, 4, 5, 6 ,10];

var result = numbers.find(function(currentValue) {
return currentValue > 4;
});

let result2 = numbers.find((currentValue) => currentValue > 5)
console.log(result2)