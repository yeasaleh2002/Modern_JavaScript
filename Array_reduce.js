 // it will not change main array. it is a useful method. 
// it will reduce and make a single value

 var numbers = [1, 2, 3, 4, 5, 6];

 var sum = numbers.reduce((preValues, currentValue) => {
    return preValues + currentValue;
 }, 0); // here ,0 is default parameter. anotherwise it will undefined. because it remember previous state value, but for the 1st one there is no values, that why we have to add default value

 console.log(sum)