var noOfSquares=6;

//pallet            
var arr= [];
//colorpicked for taregt
var picked;
//to get all the squares div
var squares = document.getElementByClassName("Square");
//to get the RGB display
var targetColor = document.getElementById("targetColor");
//message that can be empty, try again or correct
var message = document.getElementById("message");
//heading
var head = document.querySelector("h1");
//reset button
var reset = document.getElementById("NewColor");

init();
function init()
{
    //generate random colored palette
    arr = generateRandomColor(noOfSquares);
    //get target color randomly from the array size
    picked = arr[randomPickedColorIndex()];
    //updating target RGB display
    targetColor.textContent = picked;
}