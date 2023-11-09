// it will return all true data from array. It will return a new array. 

var numbers = [1, 2, 3, 4, 5, 6 ,10];

var result = numbers.filter(function(currentValue) {
return currentValue > 4;
});

let result2 = numbers.filter((currentValue) => currentValue > 5)
console.log(result);
console.log(result2);
