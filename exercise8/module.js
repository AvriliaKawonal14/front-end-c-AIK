// Module
// exercise 8

//No.1 
export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

//No.2
export const addNumber = (a, b, c, d, e, f, g) => {
    var numbers = [a, b, c, d, e, f, g];
    var sum = 0;
    numbers.map((number) => {
        sum += number;
    });
    return sum;
};

//No.3
export const phi = 3.14;
export const power = 2;
export let radius = 0;

export const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

//No.4
export const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

