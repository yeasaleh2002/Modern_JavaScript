var age = 18;
var age2 = 10

var type = "";
// by using normal condition
if(age >= 18){
    type = "Adult";
} else {
    type = "Child";
};


// by using ternary operator 
var type2 = (age >= 18) ? "Adult" : "Child";

var type3 = (age2 >= 18) ? "Adult" : (age2 < 10) ? "Child" : "Young";
console.log(type3)