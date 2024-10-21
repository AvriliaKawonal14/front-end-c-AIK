// kamis, 22 Agustus 2024
//Java Script Function 
// Cara pertama
//tanpa input (parameter) dan output

//cara 1
// function greetings1()
// {
//     console.log("Hello World");
// }
// greetings1();   //call function


// //cara 2 
// let greetings2 = function()
// {
//     console.log("Hello World");
// }
// greetings2();   //call function


//Parameter & Argument
// Dengan input dan output
//cara1
//Parameter
// function greetings1(fullName)
// {
//     return"Hello" + fullName;
// }
// //Argument
// let output = greetings1("Avrilia Kawonal");
// console.log(output);

// //cara 2
// let greetings2 = function(fullName)
// {
//     return"Hello" + fullName;
// }
// let output2 = greetings2("Avrilia Kawonal");
// console.log(output);


//global dan local scope
let x = 10; //global

function foo()
{
    let y = 20;
    let z = 30;
    console.log(x); //10
    console.log(y); //20
    if (z > x){
        let a = 40; //Block Scope
        console.log(a); //40
    }
}
foo();




