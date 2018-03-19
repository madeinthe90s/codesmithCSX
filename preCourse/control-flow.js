Challenges
1. Use an if statement to check and see if num is greater than 100. If num is less than 100, double it.

// Challenge 1
// ADD CODE HERE
for (let i = 0; i < 6; i++) {
  console.log(i);
}

2. Use a loop to log the numbers 1 to 16. Put "fizz" in place of numbers divisible by 3 and "buzz" in place of numbers divisible by 5, and "fizzbuzz in place of numbers divisible by both 3 and 5.

Hint: Check out the remainder/modulo operator %


// ADD CODE HERE
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// Challenge 1
let num = 40

	if (num > 100){
       console.log("This shouldn't log");
  }  else if (num < 100) {
   num = num * 2
}


 console.log(num)  // should log: 80

// Challenge 2
 
 var count = 0;
		//loop with the condition 
		while(count <= 16){
			//check if multiple of 3 and 5
			if(count%3 == 0 && count%5 == 0){
				console.log("fizzzbuzzzz");
			}
			//check if count multiple of 3
			else if(count%3 == 0){
				console.log("fizzzz");
			}
			//check if multiple of 5
			else if(count%5 == 0){
				console.log("buzzzzz");
			}
			else{
				console.log(count + " ")
			}
			count++;
		}

// ADD CODE HERE

// should log:
// 1 2 'fizz' 4 'buzz' 'fizz' 7 8 'fizz' 'buzz' 11 'fizz' 13 14 'fizzbuzz' 16
