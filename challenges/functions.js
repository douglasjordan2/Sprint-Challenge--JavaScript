// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (a, b, callback) => {
  return callback(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}

const greeting = (first, last) => {
  return `Hello ${first} ${last}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// The variable 'external' and myFunction exist within the same context, or "scope". For this reason, the code running within the function has access to variables in the same scope in which the function exists. Though external is outside of the code running within the function, myFunction is still able to identify and utilize it, because they exist in that same bubble (so to speak). myFunction also creates its own internal scope, though, so the variable "internal" and nestedFunction also exist within the same "bubble". nestedFunction can't be called unless myFunction is called, so nestedFunction doesn't exist outside of the specific myFunction context. The same goes for the variable "internal". For the same reason myFunction has access to external, nestedFunction has access to internal. It all comes down to the variable and function existing in the same context. If functions couldn't access variables declared in the scope they share, neither would be as useful as they are. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();