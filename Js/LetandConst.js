// Let and const declarations in javascript are hoisted but not initialized.
// They are in a "temporal dead zone" from the start of the block until the declaration is processed.

//1
console.log(b);
var b = 10;
// output:
// undefined
// Reason: The variable 'b' is declared using 'var', which is hoisted and initialized to 'undefined'. Therefore, when we log 'b' before its declaration, it outputs 'undefined'.

//2
console.log(c);
let c = 20;
// output:
// ReferenceError: Cannot access 'c' before initialization
// Reason: The variable 'c' is declared using 'let', which is hoisted but not initialized. Accessing it before its declaration results in a ReferenceError due to the temporal dead zone.
//Temporal Dead Zone (TDZ) is the time between entering scope and variable declaration where the variable cannot be accessed.
// When we put debugger on the first line and run the code, we can see that 'c' is in TDZ (temporal dead zone). Meaning it is assigned with undefined value until the line where it is declared is executed.

//In above two examples, we can see the difference in behavior between 'var' and 'let' declarations when accessed before their declaration.
// because var b is stored in the global memory space whereas let c is stored in block memory space.


//3
console.log(d);
const d = 30;
// output:
// ReferenceError: Cannot access 'd' before initialization
// Reason: Similar to 'let', the variable 'd' is declared using 'const', which is also hoisted but not initialized. Accessing it before its declaration results in a ReferenceError due to the temporal dead zone.



//4
console.log(x);
// output:
// ReferenceError: Cannot access 'x' before initialization (x is not defined)
// Reason: X is not declared anywhere in the code. Attempting to access an undeclared variable results in a ReferenceError.

//window object is same as the global object in browsers.   
console.log(window.b); // 10
// this.b also same as window.b


//5
let e = 50;
// let e = 60;
console.log(e, e1);
// output:
// SyntaxError: Identifier 'e' has already been declared
// Reason: The variable 'e' is declared twice using 'let' in the same scope, which is not allowed. This results in a SyntaxError indicating that the identifier has already been declared.

// if i declare var e as well shows same syntex error because both let and var are in same scope.
// redclaration is possible with var but not with let and const.

// const declaration is also similar to let in terms of hoisting and temporal dead zone.
// but is little more strict as it needs to be initialized during declaration itself.
const f=10;
f=1000;

// output:
// TypeError: Assignment to constant variable.
// Reason: The variable 'f' is declared using 'const', which means its value cannot be changed after initialization. Attempting to reassign a new value to 'f' results in a TypeError.



// Difference between SyntaxError and ReferenceError and TypeError:
// SyntaxError: Occurs when there is a mistake in the syntax of the code, such as redeclaring a variable with 'let' or 'const' in the same scope.
// ReferenceError: Occurs when trying to access a variable that is not declared or is in the temporal dead zone (like accessing 'let' or 'const' before their declaration).
// TypeError: Occurs when an operation is performed on a value of an inappropriate type, such as trying to reassign a value to a 'const' variable.