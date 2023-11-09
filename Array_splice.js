// it will change main array. Here should be minimum 2 parameter, you can send multiple parameters here. First parameter will mention the index which you want splice. 2nd parameter is who many element you want to remove. 3nd and next it will add in the array as element. so splice is a array method, which change the main array and if you need to add data in the array you can add there. 
// Another this is that, if we used remove element number more than array element. it should be work. here we can use negative index. it should remove all element inside the condition. 

var numbers = [1, 2, 3, 4, 5];

var result = numbers.splice(1, 2, 10, 12, 12); // it will return which I remove by condition. 

console.log(result);
console.log(numbers)