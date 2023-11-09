// it will find index of the array. And if incase values in not there then it will return -1. 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums.findIndex((currentValue, index, arr) => {
    return currentValue > 5;
});
console.log(result)