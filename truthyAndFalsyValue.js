// truthy and falsy - it will cast as bollean when it has a bollean context. 
// In the javascript, if value is expressly false (false), 0, null, empty string(""), undefined and NAN then that is false. Another wise everything is truthy.
var myVar = "";

if(myVar){
    console.log("I am truthy");
} else {
    console.log("I am falsy");
};
