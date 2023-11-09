// In the function we can add default values. and we can also pass parameter. this default values will work until if they getting a parameter values
// there if you pass parameter as undefined then default values showing. 
// if you pass null then showing null. because null is a value. 
function myFunc(x = 10){
    return x;
};

console.log(myFunc())