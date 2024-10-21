//Buatlah fungsi untuk menghitung BMI
//Rumus : BMI = berat/(tinggi * tinggi)
//berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//fungsi tersebut 2 input yaitu berat dan tinggi 
//dan mengembalikan output berupa BMI

function hitungBMI(berat, tinggi) 
{
    console.log("tinggi = ",berat,"kg");
    console.log("Berat = ",tinggi, "M");
    return BMI = berat / (tinggi * tinggi);
}
let hasil = hitungBMI(50, 1.7);
console.log("hasil BMI = ",hasil);