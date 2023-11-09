// slice method has 2 parameter, firstIndex, and last index. And we can use negative(-) index then it will be from last. It will return a new array based on first and last index. Here first and last both data should be there. And if I not adding both index then it will return full array. Major this is that, it will not change main array. 

var number1 = [1, 2, 3, 4, 5];

var result = number1.slice(0, 3);
console.log(result);

