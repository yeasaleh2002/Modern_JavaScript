// ---  javascript normal function ----
function number(){
    return 10;
};
// # if I want to pass parameter
function number1(n, m){
    return n + m;
};
console.log(number1(23, 20))


// ------ Arrow function -----
// Arrow function in one line - const number2  = () => 10;
const arrow = () => {
    return 10;
};
// # if I want to pass parameter
const arrow1 = (n, x) => {
    return n - x;
};
console.log("Arrow Func Output: ", arrow1(12, 2))


// Arrow function make easy for using this property 
var javascript = {
    name:"Javascript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function(){
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
};
javascript.printLibraries();
