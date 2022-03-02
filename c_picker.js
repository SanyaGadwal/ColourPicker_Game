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


for(var i=0;i<squares.length;i++)
{
    //setting squares's color one by one to palette color
    squares[i].style.backgroundColor=arr[i];
    //adding eventListener to all squares
    squares[i].addEventListener("click",function(){
        if(picked===this.style.backgroundColor)
    {
        message.textContent-"Correct";
        message.style.color="green";
        //when correct,set everything to the target color and set newcolor to playagain
        changeColor(this.style.backgroungColor);
        reset.textContent="Play Again?";
    }
    else

    {
        message.textContent="Try Again?";
        message.style.color="red";
        //to hide the wrong square, we will set it to background color
        this.style.backgroundColor="#232323";
    }
});
}
}

