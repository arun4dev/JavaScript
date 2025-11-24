// Scope in JavaScript refers to the accessibility of variables and functions in different parts of the code. 
// There are two main types of scope: 
// global scope and local scope. 
// Variables declared outside any function have global scope, 
// while those declared within a function have local scope.
//Scope is directly dependent on the lexical environment where the variable is defined.
// Lexical environment refers to the local memory along with the reference to its lexical environment of its parent.
// Lexical - Hierarchy of the code.
//Scope chains - Each lexical environment has a link to its outer lexical environment.


//1 
function a()
{
    console.log("Variable b inside function a:", b);
}
var b = 10;
a(); // This will log: Variable b inside function a: 10

// output:
// Variable b inside function a: 10
// Reason: The variable 'b' is declared in the global scope and is accessible within the function 'a'. When 'a' is called, it logs the value of 'b', which is 10.


//2 
function example2()
{
    function inner2()
    {
        console.log("Inner function accessing outer variable c:", c);
    }
    inner2();
}
var c=20;
example2();

// output:
// Inner function accessing outer variable c: 20
// Reason: The variable 'c' is declared in the global scope and is accessible within the inner function 'inner2'. When 'inner2' is called, it logs the value of 'c', which is 20.



//3 
function example3()
{
    var d=20;
    function inner3()
    {
        console.log("Inner function accessing outer variable d:", d);
    }
    inner3();
}
// console.log("Accessing variable d outside its scope:", d);
example3();

// output:
// Accessing variable d outside its scope: ReferenceError: d is not defined
// Reason: The variable 'd' is declared within the function 'example3' and is not accessible outside of it. When trying to log 'd' outside the function, it results in a ReferenceError because 'd' is not defined in that scope. 




//4
function example2()
{
    var c=20;
    function inner2()
    {
        console.log("Inner function accessing outer variable c:", c);
    }
    inner2();
}
example2();
// output:
// Inner function accessing outer variable c: 20
// Reason: The variable 'c' is declared within the function 'example2' and is accessible within the inner function 'inner2'. When 'inner2' is called, it logs the value of 'c', which is 20.
// Closure: The inner function 'inner2' forms a closure, capturing the variable 'c' from its outer lexical environment ('example2'). This allows 'inner2' to access 'c' even after 'example2' has finished executing.