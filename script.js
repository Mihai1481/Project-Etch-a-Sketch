function makeBoard(size){
let board = document.querySelector(".board")
let square = board.querySelectorAll("div")
square.forEach(div => div.remove())
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


for (let i = 1 ; i <= size*size ; i++){
 let square = document.createElement('div')
 square.style.backgroundColor = "red"
 board.insertAdjacentElement("beforeend", square)
 square.addEventListener("mouseover", () =>
 square.style.backgroundColor = "black")
}

}


makeBoard(16);


function changeSize(input){
    if (input >= 2 && input <= 100){
        makeBoard(input);
    } else {
        console.log("To many squares");
    }
}

