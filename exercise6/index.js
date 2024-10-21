// Kawonal, Avrilia Irena

// Ubahlah syntax ES5 berikut ke dalam ES6

// No.1
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({year, firstName}) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}
yearUntilRetirement({ year: 1987, firstName: 'John' });

// No.2
const addNumber = (a, b, c, d, e, f, g) => {
 	var numbers = [a, b, c, d, e, f, g];
 	var sum = 0;
    numbers.map((number) => {
        sum += number;
 	});
 	return sum;
 };
console.log(addNumber(1,2,3,4,5,6,7));


// No.3
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = ({radius, power}) => phi * Math.pow(radius, power);
radius = 21;
const area21 = calculateArea({radius, power});
radius = 7;
const area7 = calculateArea({radius, power});
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// No.4
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}
makeAjaxRequest('www.google.com');

