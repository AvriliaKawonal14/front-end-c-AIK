// // Array Exercise 

// let people = ["Grey", "Mary", "Devon", "James"];
// // No.1 
// // Using a for-loop, iterate through this array and console.log all of the people.
// // for (let i = 0; i < people.length; i++) {
// //     console.log(people[i]);
// // };

// // No.2 
// // Using a forEach(),  iterate through this array and console.log all of the people.
// people.forEach(function(item){
//     console.log(item);
// });

// // No.3 
// // Write the command to remove "Greg" from the array.
// people.shift();
// console.log(people);

// // No.4 
// // Write the command to remove "James" from the array.
// people.pop();
// console.log(people);

// // No.5 
// // Write the command to add "Matt" to the front of the array.
// people.unshift("Matt");
// console.log(people)

// // No.6 
// // Write the command to add your name to the end of the array.
// people.push("Avrilia");    
// console.log(people)

// // No.7 
// // Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
// for (let i = 0; 1 < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] == "Mary") {
//         break;
//     }
// }

// // No.8 
// // Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// let people2 = people.slice(2,4);
// console.log(people2)

// // No.9
// // Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people)

// // No.10 
// // Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
// let withBob = ["Bob"];
// let people3 = people.concat(withBob);
// console.log(people3)



// Object Exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


// No.1 
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming);

// No.2 
// By using the bracket notation, change the difficulty to the value of 7.
programming['difficulty'] = 7;
console.log(programming);

// No.3
// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// No.4 
// By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true
console.log(programming);

// No.5 
// Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output. 
let updateLanguages = programming.updateLanguages.map((languages, index) => '${index}- ${language}') ;
updateLanguages.forEach(updateLanguage => console.log(updateLanguages));




















