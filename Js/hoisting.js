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

