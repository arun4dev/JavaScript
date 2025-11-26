// Event Propagation in JavaScript
// Types: `Capturing Phase`, `Target Phase`, `Bubbling Phase`

//Example Code:

// TODO:
// 1. Get the grandparent, parent, and child elements.
// 2. Add a click event listener to each element.
// 3. When an element is clicked, log the current target.

document.getElementById("grandparent").addEventListener("click", function(event) {
    console.log("Grandparent clicked");
    event.stopPropagation();
},false);

document.getElementById("parent").addEventListener("click", function(event) {
    console.log("Parent clicked");
    event.stopPropagation();
},false);

document.getElementById("child").addEventListener("click", function(event) {
    console.log("Child clicked");
    event.stopPropagation();
},false);

// when we give false as third parameter it will go with bubbling phase.
// if we give true as third parameter it will go with capturing phase.
// By default, if the third parameter is not provided, it is considered as false (bubbling phase).

// so stopPropagation() will stop the event propagation in both capturing and bubbling phase.

// To test capturing phase, change the third parameter to true in all event listeners above.

// Output in Bubbling Phase (default):
// Clicking on Child:
// Child clicked
// Parent clicked
// Grandparent clicked

// Output in Capturing Phase:
// Clicking on Child:
// Grandparent clicked
// Parent clicked
// Child clicked

// Note: The order of logs will change based on the phase (capturing or bubbling) you choose.