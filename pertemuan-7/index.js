// // Java Script object 
// // Deklarasi object 
// // cara 1. Object Literal

// let john = {
//     FirstName : "John",
//     age : 30,
//     isMarried : true,
//     grade : [80,90,100],
//     sayGreetings: function (){
//         console.log("Hello my name is" + this.firstName);
//     },
//     address: {
//         street : "Jl. Arnold Mononutu",
//         city : "Minahasa Utara",
//         province : "Sulawesi Utara",
//         postalCode : 95371,
//     },
// };
// console.log(john);

// // cara 2. Kata kunci new
// let jane = new Object();
// (jane.firstName = "Jane"),(jane.age = 25),(jane.isMarried);

// console.log(jane);

// // cara mengakses properti dalam object
// // 1. Dot Notation
// console.log(john.firstName); //john
// console.log(john.age);  //30
// john.age = 3;
// console.log(john.age); //31
// john.job = "Teacher"; //Tambah property baru
// console.log(john);

// // 2. Bracket notation
// console.log(john["isMarried"]); //true
// john["nationality"] = "Indonesia";
// console.log(john);

// //Object method
// john.sayGreetings();

// //Object Inside Object
// console.log(john.address.city);  //minahasa utara

// // delete property dalam object
// delete john.grade;
// console.log(john);

// Java Script Conditional
// 1. if - else
let numbers = 10;  //boleh ganti terserah angka berapa 
if (numbers % 2 === 0 ){
    console.log("Bilangan Genap");
}
else {
    console.log("Bilangan Ganjil");
}

// 2. if - else if

// 100 - 80 nilai A
// 60 - 70 nilai B
// < 60 nilai C
let nilai = 80;
if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
}
else if (nilai >= 60 && nilai < 80) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

// Switch - Case 
let month = 8;
switch (month){
    case 1 :
        console.log ("January");
        break;
    case 2 :
        console.log ("February");
        break;
    case 3 :
        console.log ("Maret");
        break;
    case 4 :
        console.log ("April");
        break;
    case 5 :
        console.log ("Mei");
        break;
    case 6 :
        console.log ("Juni");
        break;
    case 7 :
        console.log ("Juli");
        break;
    case 8 :
        console.log ("Agustus");
        break;
    case 9 :
        console.log ("September");
        break;
    case 10 :
        console.log ("Oktober");
        break;
    case 11 :
        console.log ("November");
        break;
    case 12 :
        console.log ("December");
        break;
}


