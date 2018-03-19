Challenges
1. Using a for loop, log the numbers 1-5 in the console, making use of looping functionality instead of logging each number statically.

// Challenge 1
// ADD CODE HERE
for (let i = 0; i < 6; i++) {
  console.log(i);
}

2. Iterate through the synonyms array and log "Have a [insert array element here] day!" into the console.

// Challenge 2
let synonyms = ['fantastic', 'wonderful', 'great'];

3. You are given 3 different arrays, one of first names, last names and places. Imagine that each array element at a certain index corresponds to one user.


let firstNames = ["Jon", "Arya", "Jamie"];
let lastNames = ["Snow", "Stark", "Lannister"];
let places = ["The Wall", "Winterfell", "Kings landing"];

console.log('My name is ' + firstNames[0] +' '+  lastNames[0] + ' and I am from ' + places[0]);

console.log('My name is ' + firstNames[1] +' '+  lastNames[1] + ' and I am from ' + places[1]);

console.log('My name is ' + firstNames[2] +' '+  lastNames[2] + ' and I am from ' + places[2]);

// Loop through your arrays and log:
// My name is Jon Snow and I am from The Wall
// My name is Arya Stark and I am from Winterfell
// My name is Jamie Lannister and I am from Kings Landing 
