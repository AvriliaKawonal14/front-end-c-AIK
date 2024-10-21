// // String Literals, Arrow Function, Default Parameter

// // 1. String Literals
// let fulName = "Avril";
// let age = 20;
// let addres = "Bitung";

// // hallo nama saya avril, umur saya 20
// // saya tinggal di bitung.
// let kalimat = "Halo nama saya " 
// + fulName + " Umur saya " 
// + age + " dan saya tinggal di " 
// + addres + "."
// console.log(kalimat);

// let kalimat2 = `Halo nama saya ${fulName} umur saya ${age} dan saya tinggal di ${addres}`;
// console.log(kalimat2);

// // 2. Arrow Function
// function sayGreetings(fulName) {
//     return `Hello ${fulName}`;
//   }
// console.log(sayGreetings("Avril"));

// const sayGreetings2 = (fulName) => {
//     return `Hello ${fulName}`;
// } 
// console.log(sayGreetings2("Avril"));

// // Impilicit return value 
// const sayGreetings2 = (fulName) `Hello ${fulName}`;
// console.log(sayGreetings2(Avril));

// IIFE
// let output1 = (() => Hello)()

// console.log(output1);

//Arrow function pada callback
let numbers = [1,2,3,4,5]
let output2 = numbers.map ((item) => item )
console.log(output2);

//Default paramater
const sayGreetings3 = (fulName = "me", age = 30, addres = "Bitung") => {
  console.log(`Hello nama saya ${fulName} umur saya ${age} saya tinggal di ${addres}`);

}
sayGreetings3

sayGreetings3("Avril",20,)















