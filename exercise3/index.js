//Kawonal, Avrilia

let human = {
    firstName: "Avrilia",
    lastName:"Kawonal",
    weight: 57,
    height: 1.60,
  }
  console.log(human);
  
  function hitungBMI(weight, height) {
    let bmi = weight / (height * height);
  
    if (bmi < 16.0) {
      console.log(human.firstName + "Severely Underweight");
    }
    else if (bmi >= 16.0 && bmi <= 18.4) {
      console.log(human.firstName + "Underweight");
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(human.firstName + "Normal");
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
      console.log(human.firstName + " Overweight");
    }
    else if (bmi >= 30.0 && bmi <= 34.9) {
      console.log(human.firstName + "Moderately Obese");
    }
    else if (bmi >= 35.0 && bmi <= 39.9) {
      console.log(human.firstName + "Severely Obese");
    }
    else if (bmi >= 40.0) {
      console.log(human.firstName + "Morbidly Obese");
    }
    else {
      console.log(human.firstName + "Not defined");
    }
  
    return bmi;
  }
  
  
  let hasil = hitungBMI(human.weight, human.height);
  console.log(human.firstName + " BMI Value =",hasil);
  