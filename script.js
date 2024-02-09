let color = "black";

function makeBoard(size) {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 1; i <= size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

makeBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    makeBoard(input);
  } else {
    console.log("To many squares");
  }
}

function colorSquare() {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
  updateColorText();
}

function resetBoard() {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "white"));
}


function updateColorText(){
    if (color === "black"){
        document.querySelector('.colorSelected').textContent = "Drawing with : Black"
    } else if (color === "white"){
        document.querySelector('.colorSelected').textContent = "Selected : Erasor"
    }  else if (color === "rainbow"){
        document.querySelector('.colorSelected').textContent = "Drawing with : Rainbow color"
    }
}