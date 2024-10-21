//IIFE & Callback

// 1. IIFE (Immediately Invoked Fucntion Expr)

/// no parameter
// (function(){
//     console.log("Hello World");
// })();

// // IIFE with parameter dan Arguments 
// (function(fullName){
//     console.log("Hello" + fullName);
// })("Avrilia Kawonal");

// // IIFE with parameter dan Arguments dan return values
// let output = (function(fullName){
//     return "Hello" + fullName;
// })("Avrilia Kawonal");
// console.log(output);


///Callback function
/// no parameter,arguments dan return value
// function sayHello(Callback){
//     Callback();
// }

// sayHello(function(){
//     console.log("Hello Callback Function")
// });

/// with parameter,argument, dan return value
function sayHello(Callback){
    let output = Callback("Avrilia Irena");
    return output;
}

let output = sayHello(function(fullName){
    return "Hello" + fullName;
});
console.log(output);








