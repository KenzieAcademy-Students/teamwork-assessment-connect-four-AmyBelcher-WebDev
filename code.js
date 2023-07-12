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

let messageBox= document.querySelector(".messageBox")
let gameDiv= document.querySelector(".game")
let tableGrid= document.querySelector(".game.div")



let whoIsTheWinner = function (boardModel) {
  //check for 4 in a row
  //return the player number who won, or null
};

let isGameATie = function (boardModel) {
  //returns a boolean
};

let nextPlayer = function () {};

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
  let tableRow= document.querySelectorAll(".tableRow")
  let gameCell= document.querySelectorAll(".gameCell")
    if (board[countStart][cellValue] !== 0) {
        numberOfDiscsPlayed= numberOfDiscsPlayed += 1;
        dropDisc(countStart, cellValue)
    } else {
        let currentRow= tableRow[countStart].gameCell
        currentRow[cellValue].classList.add("occupied", `player${currentPlayer}`)
        board[countStart][cellValue]= currentPlayer; 
        if(whoIsTheWinner(countStart, cellValue)) {
          message.innerHTML= `Player <span> ${currentPlayer}</span> wins!`
          return false;
        }
    }
    checkForGameOver();
    }
    console.table(board)

let displayMessage = function (message) {
  //Show message in the message box on the DOM
};

let setUpClickHandlers = function () {};

let initializeGame = function () {
  //initialize various variables
  setUpClickHandlers();
};

initializeGame();


let startButton = document.createElement("button");
startButton.innerHTML = "Start";
messageBox.append(startButton);
startButton.addEventListener("click", function(){
  alert(`Player ${currentPlayer} start`)
})



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

