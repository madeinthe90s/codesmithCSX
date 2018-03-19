1. Multiply 20 by 4

2. Divide 9 by 3

3. Multiply 200.3 * 3

Floats
Any number with the decimal point is a float. Notice that in the last exercise you multiplied 200.3 by 3 and the output from that was 600.9000000000001. What happened here? Why didn't we get 600.9?

The way floats are handled in JavaScript can cause these rounding errors. Some decimal numbers cannot be represented accurately. The reason has to do with how numbers are encoded in JavaScript. It's something to be aware of when working with decimal numbers JavaScript.


/* Multiplication and Division */
// ADD CODE HERE

function mult(num, num1){
   var result =  num * num1;
  return result;
}
console.log(mult(20, 4));


function div(num, num1){
  var result = num / num1;
  return result;
}
console.log(div(9, 3));
console.log(mult(200.3, 3))
// Multiply 20 by 4 -> 80
// Divide 9 by 3 -> 3 
// Multiply 200.3 *3 -> 600.9000000000001
