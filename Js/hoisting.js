// Hoisting in js is something that allows variable and function are accessible before their declaration in the code. 
// why because during the meory allocation phase js engine allocates memory for variable and functions before executing the code. this is called hoisting.




var a=10;

function getName(){
    console.log("Arun Prakash G");
}
console.log(a);
getName();

//output:
//10
//Arun Prakash G
//Reason: In this code, both the variable 'a' and the function 'getName' are hoisted to the top of their scope. Therefore, when we log 'a' and call 'getName', they are accessible and produce the expected output.


// but when we try to access them before their declaration like below:

console.log(a);
getName();
var a=10;

function getName(){
    console.log("Arun Prakash G");
}

// output:
// undefined
// Arun Prakash G
// Reason: In this case, the variable 'a' is hoisted but not initialized, so it outputs 'undefined' when logged before its declaration. However, the function 'getName' is fully hoisted, allowing it to be called before its declaration without any issues.


// if we not declared the variable 'a' and try to access it  it will throw not defined error. but if you declare it with var keyword it will show undefined. because var declarations are hoisted and initialized with undefined.
// Reason: The variable 'a' is not declared in this case, so trying to access it results in a ReferenceError indicating that 'a' is not defined. This demonstrates the difference between accessing an undeclared variable and a variable declared with 'var' that is hoisted but uninitialized.



console.log(getArrow);
var getArrow = () =>{
    console.log("Arrow Function");
}

// output:
// undefined
// TypeError: getArrow is not a function
// Reason: The variable 'getArrow' is hoisted and initialized to 'undefined'. When we try to call it as a function before its declaration, it results in a TypeError because 'undefined' is not callable. This highlights the difference between function declarations and function expressions assigned to variables.


console.log(getArrow);
var getArrow = function (){
    console.log("Arrow Function");
}

// this also behanv