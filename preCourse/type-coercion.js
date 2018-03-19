Type Coercion
Look at the console.log statements for this challenge. Think about what will be logged in the console. Then go ahead, uncomment the code and run.

What happened?

console.log(10 + 5); // 15
console.log("10" + 5); // 105
The first statement added the numbers like expected. In the second statement 105 is logged to the console. Notice the quotes wrapped about the number 10, this means that the value is a string. There are no quotes around the number 5.

What's happened is type coercion. We can't add a string and a number together. What happens is that the number type is changed into a string. What happens at this point is string concatenation.

console.log("10" + "5"); // 105
console.log("10" + 5); // 105
Challenge
Uncomment the code and see what happens. Then, try it out yourself and make sure you really understand the concept.


// Uncomment the code below to test 
 console.log(10 + 5);
 console.log("10" + 5);
 console.log(5 + "10")
 
  console.log(10 + 5);
 console.log(10 + 5);
 console.log(5 + 10)
