// it will not change the main array, it will return a new array. if you want to add array inside an another array, then you can use this concat method. we can add multiple array by using concat

var numbers = [1, 2, 3, 4, 5];
var numbers2 = [6, 9, 12, 32, 13, 14, 15];
var numbers3 = [26, 29, 312, 332, 213, 114, 115];

var result = numbers.concat(numbers2);
var result2 = numbers.concat(numbers2, numbers3);
console.log(numbers);
console.log(result); 
console.log(result2); 