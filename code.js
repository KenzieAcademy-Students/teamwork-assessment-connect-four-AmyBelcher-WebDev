// Your Code Here.
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let currentPlayer = 1;
let numberOfDiscsPlayed = 0;

let messageBox = document.querySelector(".messageBox");
let gameDiv = document.querySelector(".game");
let tableGrid = document.querySelector(".game.div");

let displayMessage = function (message) {
  message = document.getElementById(".messageBox")
};

let whoIsTheWinner = function (boardModel) {
  //check for 4 in a row
  //return the player number who won, or null
};

let isGameATie = function (boardModel) {
  //returns a boolean
};

let nextPlayer = function () {
  if (currentPlayer === 1){
    currentPlayer = 2
    displayMessage(`Player ${currentPlayer} it's your turn`)
  }else if (currentPlayer === 2){
    currentPlayer = 1
    displayMessage(`Player ${currentPlayer} it's your turn`)
  }
};

let gameOver = function() {

}

let checkForGameOver = function (boardModel) {
  //look at the board variable to find 4-in a row
  let winner = whoIsTheWinner(boardModel);
  let tieGame = isGameATie(boardModel);
  if (winner !== null || tieGame) {
    gameOver(winner, tieGame);
  } else {
    nextPlayer();
  }
};
let dropDisc = (countStart, cellValue) => {
  let tableRow = document.querySelectorAll(".tableRow");
  let gameCell = document.querySelectorAll(".gameCell");
  if (board[countStart][cellValue] !== 0) {
    numberOfDiscsPlayed = numberOfDiscsPlayed += 1;
    dropDisc(countStart, cellValue);
  } else {
    let currentRow = tableRow[countStart].gameCell;
    currentRow[cellValue].classList.add("occupied", `player${currentPlayer}`);
    board[countStart][cellValue] = currentPlayer;
    if (whoIsTheWinner(countStart, cellValue)) {
      message.innerHTML = `Player <span> ${currentPlayer}</span> wins!`;
      return false;
    }
  }
  checkForGameOver();
};
console.table(board);

let setUpClickHandlers = function () {
let col1 = document.querySelector("column1")
col1.addEventListener("click", function(){
  dropDisc(1)
})

let col2 = document.querySelector("column2")
col2.addEventListener("click", function(){
  dropDisc(2)
})

let col3 = document.querySelector("column3")
col3.addEventListener("click", function(){
  dropDisc(3)
})

let col4 = document.querySelector("column4")
col4.addEventListener("click", function(){
  dropDisc(4)
})

let col5 = document.querySelector("column5")
col5.addEventListener("click", function(){
  dropDisc(5)
})

let col6 = document.querySelector("column6")
col6.addEventListener("click", function(){
  dropDisc(6)
})

let col7 = document.querySelector("column7")
col7.addEventListener("click", function(){
  dropDisc(7)
})
};

let initializeGame = function () {
  //initialize various variables
  setUpClickHandlers();
};

initializeGame();

let startButton = document.createElement("button");
startButton.innerHTML = "Start";
messageBox.append(startButton);
startButton.addEventListener("click", function () {
  displayMessage(`Player ${currentPlayer} start`);
});

let testBoard1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0],
];

let testBoard2 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 1, 1, 2, 1, 0, 0],
];

let testBoard3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
