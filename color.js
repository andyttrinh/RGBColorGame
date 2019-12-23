// -------------------Variables------------------------
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDispaly = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// ------------------Executing Codes-------------------
// Changeing the color of each div
for(var i = 0; i < squares.length; i++){
  // Add color of each Div
  squares[i].style.backgroundColor = colors[i];
  // Adding ClickListener to each Div
  squares[i].addEventListener("click", function(){
    // grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if(clickedColor === pickedColor){
      messageDispaly.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "New Colors";
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else{
      this.style.backgroundColor = "#232323";
      messageDispaly.textContent = "Try Again!";
    }
  })
}

//Reset button
resetButton.addEventListener("click", function(){
  reset();
})

//Loop through buttons
for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent === "Easy"){
      numSquares = 3;
    } else{
      numSquares = 6;
    }
    reset();
  })
}

// //Easy button
// easyBtn.addEventListener("click", function(){
//   messageDispaly.textContent = "Guess a Color!";
//   h1.style.backgroundColor = "steelblue";
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   //Generate new colors and pick new color
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else{
//       squares[i].style.display = "none";
//     }
//   }
// })
//
// //Hard button
// hardBtn.addEventListener("click", function(){
//   messageDispaly.textContent = "Guess a Color!";
//   h1.style.backgroundColor = "steelblue";
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })

// RGB Title change
colorDisplay.textContent = pickedColor;
messageDispaly.textContent = "Guess a Color!";
modeButtons[1].classList.add("selected");
// ------------------------Functions--------------------------
// Once correct is clicked change other square color to the correct one
function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each other square color to match given color
    squares[i].style.backgroundColor = color;
  }
}

// Random color picker from the "colors" array
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Used to return random color that was generated
function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i ++){
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

// Used to generate a random color RGB
function randomColor(){
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  //insert variables into an RGB string
  return("rgb(" + r + ", " + g + ", " + b + ")");
}

//used when button is clicked
function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from away
  pickedColor = pickColor();
  //change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  // change the color of the squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colors"
  h1.style.backgroundColor = "steelblue";
}
